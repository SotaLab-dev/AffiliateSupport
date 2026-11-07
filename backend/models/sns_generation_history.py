from sqlalchemy import BigInteger, Column, DateTime, String, Text

from ..database.base import Base


class SnsGenerationHistory(Base):
    __tablename__ = "sns_generation_history"

    id = Column(BigInteger, primary_key=True)

    content_id = Column(String(100), nullable=False)

    title = Column(Text, nullable=False)

    generated_text = Column(Text, nullable=False)

    prompt_text = Column(Text)

    llm_model = Column(String(100))

    created_at = Column(DateTime)
