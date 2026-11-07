from ...services.dmm.dmm_client import DmmClient
from ...services.dmm.mapper import DmmMapper


class FanzaWorkService:
    def __init__(self):
        self.client = DmmClient()

    def get_by_content_id(self, content_id: str):

        response = self.client.item_list({"cid": content_id})

        result = response.get("result", {})

        if result.get("status") != 200:
            raise RuntimeError(f"DMM API Error: {result}")

        items = result.get("items", [])

        if not items:
            raise ValueError("作品が存在しません")

        return DmmMapper.to_work(items[0])
