from openai import OpenAI

from .base import BaseLlmClient


class OpenAiClient(BaseLlmClient):
    def __init__(self):

        self.client = OpenAI()

    def generate(self, prompt: str) -> str:

        response = self.client.chat.completions.create(
            model="gpt-5", messages=[{"role": "user", "content": prompt}]
        )

        content = response.choices[0].message.content

        if content is None:
            raise ValueError("OpenAIから空のレスポンスが返りました")

        return content
