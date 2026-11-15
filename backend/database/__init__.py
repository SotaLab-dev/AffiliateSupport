from ..database.base import Base
from ..database.session import get_engine


def init_db():
    Base.metadata.create_all(bind=get_engine())
