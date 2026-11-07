from functools import lru_cache

from sqlalchemy import Engine, create_engine
from sqlalchemy.orm import Session, sessionmaker

from ..config.database import DatabaseConfig


@lru_cache(maxsize=1)
def get_engine() -> Engine:
    return create_engine(
        DatabaseConfig.get_uri(),
        echo=False,
        pool_pre_ping=True,
    )


@lru_cache(maxsize=1)
def get_session_factory() -> sessionmaker[Session]:
    return sessionmaker(
        autocommit=False,
        autoflush=False,
        bind=get_engine(),
    )


def get_session() -> Session:
    return get_session_factory()()
