from dataclasses import dataclass


@dataclass
class FanzaWork:
    content_id: str
    title: str

    actress_name: str | None
    maker_name: str | None
    genre_name: str | None

    image_url: str | None
    affiliate_url: str | None

    review_average: str | None = None
    review_count: int | None = None
