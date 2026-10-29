from flask import Flask

from backend.api import register_blueprints

def create_app():
    # Flaskアプリのインスタンスを作成
    app = Flask(__name__)


    # ルートURL（/）へのアクセス処理
    @app.route('/')
    def hello_world():
        return '<p>Hello, World!</p>'

    return app
    