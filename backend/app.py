from flask import Flask

from .api import register_blueprints
from .logging_system.app_logger import AppLogger
from .middleware.logging_middleware import register_logging_middleware


def create_app():
    """
    Flaskアプリケーション生成処理。

    アプリ起動時に以下を初期化する。

    - Logger
    - Blueprint
    - Middleware
    """
    app = Flask(__name__)

    AppLogger.initialize()
    AppLogger.info("AffiliateSupport application started")

    register_blueprints(app)
    register_logging_middleware(app)

    @app.route("/")
    def hello_world():

        AppLogger.info("Hello World Access")

        return "<p>Hello, World!</p>"

    return app
