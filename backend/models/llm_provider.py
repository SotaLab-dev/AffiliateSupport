from sqlalchemy import BigInteger, Boolean, Column, String

from ..database.base import Base


class LlmProvider(Base):
    __tablename__ = "llm_provider"

    id = Column(
        BigInteger,
        primary_key=True,
    )

    provider_code = Column(
        String(50),
        nullable=False,
    )

    provider_name = Column(
        String(100),
        nullable=False,
    )

    model_name = Column(
        String(100),
        nullable=False,
    )

    is_active = Column(
        Boolean,
        nullable=False,
    )
