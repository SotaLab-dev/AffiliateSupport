import traceback

from flask import Blueprint, jsonify, request

from ..services.sns_post_service import SnsPostService

sns_post_bp = Blueprint(
    "sns_post",
    __name__,
)


@sns_post_bp.post("/api/sns-post/generate")
def generate():

    try:
        body = request.get_json()

        result = SnsPostService().generate(body["content_id"])

        return (
            jsonify(result),
            200,
        )

    except ValueError as ex:
        return (
            jsonify(
                {
                    "code": "NOT_FOUND",
                    "message": str(ex),
                }
            ),
            404,
        )

    except Exception as ex:
        traceback.print_exc()

        return (
            jsonify(
                {
                    "code": "SYSTEM_ERROR",
                    "message": str(ex),
                }
            ),
            500,
        )
