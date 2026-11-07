from ...services.dmm.dto import FanzaWork


class DmmMapper:
    @staticmethod
    def to_work(item: dict) -> FanzaWork:

        content_id = item.get("content_id")
        title = item.get("title")

        if content_id is None or title is None:
            raise ValueError(f"必須フィールドが不足しています: {item}")

        actresses = item.get("iteminfo", {}).get("actress", [])
        makers = item.get("iteminfo", {}).get("maker", [])
        genres = item.get("iteminfo", {}).get("genre", [])

        actress_name = ", ".join(a["name"] for a in actresses) if actresses else None

        maker_name = makers[0]["name"] if makers else None

        genre_name = ", ".join(g["name"] for g in genres) if genres else None

        review = item.get("review", {})

        review_average = review.get("average")
        review_count = review.get("count")

        def normalize(value):
            if value in (None, "", "--"):
                return None
            return value

        return FanzaWork(
            content_id=content_id,
            title=title,
            actress_name=normalize(actress_name),
            maker_name=normalize(maker_name),
            genre_name=normalize(genre_name),
            image_url=item.get("imageURL", {}).get("large"),
            affiliate_url=item.get("affiliateURL"),
            review_average=normalize(review_average),
            review_count=normalize(review_count),
        )
