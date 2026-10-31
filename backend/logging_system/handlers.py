# logging_system/handlers.py

import os
from logging.handlers import TimedRotatingFileHandler
from pathlib import Path

# 当日出力中のログと過去ログを分離する。
# current_log.log だけ確認すれば最新ログを追えるようにするため。
PROJECT_ROOT = Path(__file__).resolve().parents[2]

LOG_DIR = PROJECT_ROOT / "logs"
HISTORY_DIR = LOG_DIR / "log_history"

LOG_DIR.mkdir(parents=True, exist_ok=True)
HISTORY_DIR.mkdir(parents=True, exist_ok=True)

# ログ肥大化防止のため保持期間を制限する。
# 運用要件に応じて見直し可能。
LOG_RETENTION_DAYS = 30

LOG_ROTATION = "midnight"
LOG_INTERVAL = 1

FILE_ENCODING = "utf-8"


class DailyRotatingFileHandler(TimedRotatingFileHandler):
    """
    Flaskアプリケーション用の日次ローテーションハンドラ。

    当日分は current_log.log / current_error.log に出力し、
    日付変更時に log_history 配下へ退避する。

    運用時に最新ログを確認しやすくすることを目的としている。
    """

    def __init__(
        self,
        filename: Path,
        log_type: str,
        backup_count: int = LOG_RETENTION_DAYS,
    ):
        self.log_type = log_type

        super().__init__(
            filename=str(filename),
            when=LOG_ROTATION,
            interval=LOG_INTERVAL,
            backupCount=backup_count,
            encoding=FILE_ENCODING,
        )

    def rotation_filename(
        self,
        default_name: str,
    ) -> str:
        """
        TimedRotatingFileHandler がローテーション時に呼び出す。

        デフォルトのファイル名
            current_log.log.2026-10-31

            ↓

            log_history/20261031_log.log

        へ変換するためにオーバーライドしている。
        """

        basename = os.path.basename(default_name)

        # current_log.log.2026-10-31
        date_str = basename.split(".")[-1]

        # 2026-10-31 -> 20261031
        date_str = date_str.replace("-", "")

        return str(HISTORY_DIR / f"{date_str}_{self.log_type}.log")
