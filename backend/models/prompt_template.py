from sqlalchemy import BigInteger, Boolean, Column, String, Text

from ..database.base import Base


class PromptTemplate(Base):
    __tablename__ = "prompt_template"

    id = Column(
        BigInteger,
        primary_key=True,
    )

    template_code = Column(
        String(100),
        nullable=False,
    )

    template_name = Column(
        String(200),
        nullable=False,
    )

    prompt_text = Column(
        Text,
        nullable=False,
    )

    is_active = Column(
        Boolean,
        nullable=False,
    )
