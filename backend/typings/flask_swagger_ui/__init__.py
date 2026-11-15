from typing import Any

from flask import Blueprint


def get_swaggerui_blueprint(
    base_url: str,
    api_url: str,
    config: dict[str, Any] | None = None,
    oauth_config: dict[str, Any] | None = None,
    blueprint_name: str = "swagger_ui",
) -> Blueprint: ...
