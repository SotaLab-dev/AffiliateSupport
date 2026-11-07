from .health import health_bp
from .sns_post import sns_post_bp
from .swagger import swagger_bp


def register_blueprints(app):
    app.register_blueprint(health_bp)
    app.register_blueprint(swagger_bp)
    app.register_blueprint(sns_post_bp)
