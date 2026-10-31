from flask import Blueprint, send_file
from flask_swagger_ui import get_swaggerui_blueprint

SWAGGER_URL = "/openapi/swagger"
API_URL = "/openapi/swagger.yaml"

swagger_bp = Blueprint("swagger", __name__)

swagger_ui = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
)

swagger_bp.register_blueprint(swagger_ui)


@swagger_bp.get(API_URL)
def swagger_yaml():
    return send_file(
        "../docs/api/affiliate-support-api.yaml",
        mimetype="application/yaml",
    )
