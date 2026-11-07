from ..database.base import Base
from ..database.session import get_engine
from ..models.llm_provider import LlmProvider  # noqa: F401
from ..models.prompt_template import PromptTemplate  # noqa: F401
from ..models.sns_generation_history import SnsGenerationHistory  # noqa: F401


def init_db():
    Base.metadata.create_all(bind=get_engine())
