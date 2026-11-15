from os import getenv

from services.llm.base import BaseLlmClient
from services.llm.ollama_client import OllamaClient
from services.llm.openai_client import OpenAiClient


class LlmFactory:
    @staticmethod
    def create() -> BaseLlmClient:

        provider = getenv("LLM_PROVIDER", "OLLAMA")

        if provider == "OPENAI":
            return OpenAiClient()

        return OllamaClient()
