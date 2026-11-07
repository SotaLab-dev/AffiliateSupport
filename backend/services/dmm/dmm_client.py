import os

import requests


class DmmClient:
    BASE_URL = "https://api.dmm.com/affiliate/v3/ItemList"

    def item_list(self, params: dict):

        query = {
            "api_id": os.getenv("DMM_API_ID"),
            "affiliate_id": os.getenv("DMM_AFFILIATE_ID"),
            "site": "FANZA",
            "output": "json",
            **params,
        }

        response = requests.get(self.BASE_URL, params=query, timeout=30)

        response.raise_for_status()

        return response.json()
