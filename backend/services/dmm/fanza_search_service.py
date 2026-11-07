from ...services.dmm.dmm_client import DmmClient
from ...services.dmm.mapper import DmmMapper


class FanzaSearchService:
    def __init__(self):

        self.client = DmmClient()

    def search(
        self,
        conditions: dict,
    ):

        response = self.client.item_list(conditions)
        items = response["result"]["items"]

        return [DmmMapper.to_work(item) for item in items]
