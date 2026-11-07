from abc import ABC, abstractmethod


class BaseLlmClient(ABC):
    @abstractmethod
    def generate(self, prompt: str) -> str:
        pass
