from pydantic import BaseModel


class SnsPostRequest(BaseModel):
    content_id: str


class SnsPostResponse(BaseModel):
    title: str
    generated_text: str
