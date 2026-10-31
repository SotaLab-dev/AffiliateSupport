# logging_system/app_logger.py

import logging

from flask import g, has_request_context, request

from ..logging_system.handlers import LOG_DIR, DailyRotatingFileHandler

LOG_NAME = "affiliate_support_logger"
ERROR_LOG_NAME = "affiliate_support_error_logger"

LOG_FILE_NAME = "current_log.log"
ERROR_LOG_FILE_NAME = "current_error.log"

LOG_TYPE = "log"
ERROR_LOG_TYPE = "error"

# Python標準loggingにはTRACEレベルが存在しないため独自定義する。
TRACE_LEVEL = 5
TRACE_NAME = "TRACE"

logging.addLevelName(TRACE_LEVEL, TRACE_NAME)

LOG_FORMAT = (
    "%(asctime)s | "
    "%(levelname)s | "
    "%(filename)s:%(lineno)d | "
    "%(method)s | "
    "%(request_id)s | "
    "%(message)s"
)


class RequestContextFilter(logging.Filter):
    """
    Flaskのリクエストコンテキストから情報を取得し、
    すべてのログへ Method と RequestID を付与する。

    RequestIDにより同一リクエスト内のログ追跡を可能にする。
    """

    def filter(self, record: logging.LogRecord) -> bool:

        if has_request_context():
            record.method = request.method
            record.request_id = getattr(g, "request_id", "-")
        else:
            record.method = "-"
            record.request_id = "-"

        return True


class MaxLevelFilter(logging.Filter):
    """
    ERROR以上のログを除外する。

    current_log.log には
    TRACE / DEBUG / INFO / WARN のみ出力し、
    ERROR / FATAL は current_error.log に集約するため。
    """

    def filter(self, record: logging.LogRecord) -> bool:

        return record.levelno < logging.ERROR


class AppLogger:
    """
    アプリケーション共通ログ出力クラス。

    利用側は logging を直接使用せず、
    AppLogger経由でログを出力する。

    ログ出力先の振り分けやフォーマット変更を
    AppLogger内部へ閉じ込めることで、
    業務コードとログ実装を分離している。
    """

    _normal_logger: logging.Logger | None = None
    _error_logger: logging.Logger | None = None

    @classmethod
    def initialize(cls):

        if cls._normal_logger is not None and cls._error_logger is not None:
            return

        cls._normal_logger = logging.getLogger(LOG_NAME)

        cls._normal_logger.setLevel(TRACE_LEVEL)

        cls._normal_logger.propagate = False

        if not cls._normal_logger.handlers:
            handler = cls._create_handler(
                filename=LOG_FILE_NAME,
                log_type=LOG_TYPE,
                filters=[RequestContextFilter(), MaxLevelFilter()],
            )
            cls._normal_logger.addHandler(handler)

        cls._error_logger = logging.getLogger(ERROR_LOG_NAME)

        cls._error_logger.setLevel(logging.ERROR)

        cls._error_logger.propagate = False

        if not cls._error_logger.handlers:
            handler = cls._create_handler(
                filename=ERROR_LOG_FILE_NAME,
                log_type=ERROR_LOG_TYPE,
                filters=[RequestContextFilter()],
            )
            cls._error_logger.addHandler(handler)

    @classmethod
    def _ensure_initialized(cls):
        """
        AppLogger.initialize() の呼び忘れ対策。

        開発者が初期化処理を意識しなくても
        ログ出力できるようにしている。
        """
        if cls._normal_logger is None or cls._error_logger is None:
            cls.initialize()

    @classmethod
    def _log(cls, logger: logging.Logger, level: int, message: str, **kwargs):
        """
        共通ログ出力処理。

        stacklevel=3 を指定し、
        実際の呼び出し元ファイル・行番号を
        ログへ出力できるようにする。
        """
        logger.log(level, message, stacklevel=3, **kwargs)

    @classmethod
    def _create_handler(
        cls, filename: str, log_type: str, filters: list[logging.Filter]
    ) -> DailyRotatingFileHandler:
        """
        Handler生成処理を共通化する。

        FormatterやFilter設定の重複を防ぎ、
        normalログとerrorログで設定差異が
        発生しないようにする。
        """

        handler = DailyRotatingFileHandler(LOG_DIR / filename, log_type)

        for filter_obj in filters:
            handler.addFilter(filter_obj)

        formatter = logging.Formatter(LOG_FORMAT)

        handler.setFormatter(formatter)

        return handler

    @classmethod
    def _get_normal_logger(cls) -> logging.Logger:
        """
        型安全のためLogger取得をメソッド化している。

        Pyrightによる
        'None may not have attribute'
        警告を回避する目的もある。
        """

        if cls._normal_logger is None:
            raise RuntimeError("AppLogger.initialize() has not been called.")

        return cls._normal_logger

    @classmethod
    def _get_error_logger(cls) -> logging.Logger:

        if cls._error_logger is None:
            raise RuntimeError("AppLogger.initialize() has not been called.")

        return cls._error_logger

    @classmethod
    def trace(cls, message: str) -> None:

        cls._ensure_initialized()

        cls._log(
            cls._get_normal_logger(),
            TRACE_LEVEL,
            message,
        )

    @classmethod
    def debug(cls, message: str) -> None:

        cls._ensure_initialized()

        cls._log(
            cls._get_normal_logger(),
            logging.DEBUG,
            message,
        )

    @classmethod
    def info(cls, message: str) -> None:

        cls._ensure_initialized()

        cls._log(
            cls._get_normal_logger(),
            logging.INFO,
            message,
        )

    @classmethod
    def warn(cls, message: str) -> None:

        cls._ensure_initialized()

        cls._log(
            cls._get_normal_logger(),
            logging.WARNING,
            message,
        )

    @classmethod
    def error(cls, message: str, exc_info=True) -> None:

        cls._ensure_initialized()

        cls._log(cls._get_error_logger(), logging.ERROR, message, exc_info=exc_info)

    @classmethod
    def fatal(cls, message: str, exc_info=True) -> None:

        cls._ensure_initialized()

        cls._log(cls._get_error_logger(), logging.CRITICAL, message, exc_info=exc_info)
