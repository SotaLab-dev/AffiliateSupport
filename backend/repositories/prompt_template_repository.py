from sqlalchemy.orm import Session

from ..models.prompt_template import PromptTemplate


class PromptTemplateRepository:
    def find_by_code(
        self,
        db: Session,
        template_code: str,
    ):

        return (
            db.query(PromptTemplate).filter(PromptTemplate.template_code == template_code).first()
        )
