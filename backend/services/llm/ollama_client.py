import os

import requests

from ...services.llm.base import BaseLlmClient


class OllamaClient(BaseLlmClient):
    def __init__(self):

        url = os.getenv("OLLAMA_URL")

        if not url:
            raise RuntimeError("OLLAMA_URL が設定されていません")
        self.url: str = url

        self.model = os.getenv("OLLAMA_MODEL")

    @property
    def model_name(self):

        return self.model

    def generate(
        self,
        prompt: str,
    ) -> str:

        response = requests.post(
            self.url,
            json={
                "model": self.model,
                "prompt": prompt,
                "stream": False,
            },
            timeout=120,
        )
        response.raise_for_status()

        data = response.json()

        return data["response"]
