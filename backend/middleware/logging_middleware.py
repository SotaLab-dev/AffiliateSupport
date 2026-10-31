# middleware/logging_middleware.py

import time
import uuid

from flask import g, request
from werkzeug.exceptions import HTTPException

from ..logging_system.app_logger import AppLogger


def register_logging_middleware(app):
    """
    Flaskアプリケーション全体へ
    以下を共通適用する。

    - RequestID生成
    - 処理時間計測
    - アクセスログ出力
    - 未捕捉例外ログ出力
    """

    @app.before_request
    def before_request():
        # 同一リクエスト内のログを追跡できるように
        # RequestIDを生成する
        g.request_id = str(uuid.uuid4())

        g.start_time = time.time()

    @app.after_request
    def after_request(response):
        start_time = getattr(g, "start_time", time.time())

        # アプリケーション性能監視のため
        # 処理時間をミリ秒単位で記録する
        duration_ms = int((time.time() - start_time) * 1000)

        AppLogger.info(
            f"STATUS={response.status_code} PATH={request.path} DURATION={duration_ms}ms"
        )

        return response

    @app.errorhandler(Exception)
    def handle_exception(ex):

        if isinstance(ex, HTTPException):
            AppLogger.warn(f"HTTP_EXCEPTION={ex.code}PATH={request.path}MESSAGE={ex.description}")

            return ex

        AppLogger.error(f"UNHANDLED_EXCEPTION={str(ex)}")

        raise ex
