from datetime import datetime
from os import getenv

from ..database.session import get_session
from ..models.sns_generation_history import SnsGenerationHistory
from ..repositories.sns_generation_repository import SnsGenerationRepository
from ..services.dmm.fanza_work_service import FanzaWorkService
from ..services.llm.factory import LlmFactory
from ..services.prompt.prompt_service import PromptService


class SnsPostService:
    def generate(
        self,
        content_id: str,
    ):

        db = get_session()

        try:
            #
            # FANZA
            #

            work = FanzaWorkService().get_by_content_id(content_id)

            #
            # Prompt
            #
            prompt = PromptService().build_prompt(
                db=db,
                work=work,
            )

            #
            # LLM
            #

            llm = LlmFactory.create()

            generated_text = llm.generate(prompt)

            #
            # 80文字制限
            #

            generated_text = generated_text[:80]

            #
            # history save
            #

            history = SnsGenerationHistory(
                content_id=content_id,
                title=work.title,
                generated_text=generated_text,
                prompt_text=prompt,
                llm_model=getenv("LLM_MODEL"),
                created_at=datetime.now(),
            )

            (
                SnsGenerationRepository().create(
                    db=db,
                    history=history,
                )
            )

            return {
                "content_id": content_id,
                "title": work.title,
                "post_text": generated_text,
            }

        finally:
            db.close()
