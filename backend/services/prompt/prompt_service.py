from sqlalchemy.orm import Session

from services.dmm.FanzaWork_dto import FanzaWork

from ...repositories.prompt_template_repository import PromptTemplateRepository


class PromptService:
    TEMPLATE_CODE = "FANZA_X_POST"

    def build_prompt(
        self,
        db: Session,
        work: FanzaWork,
    ) -> str:

        template = PromptTemplateRepository().find_by_code(
            db=db,
            template_code=self.TEMPLATE_CODE,
        )

        if template is None:
            raise RuntimeError("PromptTemplate not found")

        # DBのプロンプトの変数名とformatの引数名を合わせる
        return template.prompt_text.format(
            title=work.title,
            actress=work.actress_name or "",
            genres=work.genre_name or "",
            maker=work.maker_name or "",
            review_average="",
            review_count="",
            affiliate_url=work.affiliate_url or "",
        )
