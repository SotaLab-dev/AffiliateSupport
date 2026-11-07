from os import getenv


class DatabaseConfig:
    @staticmethod
    def _require(name: str) -> str:
        value = getenv(name)
        if not value:
            raise RuntimeError(f"環境変数 {name} が設定されていません")
        return value

    @classmethod
    def get_uri(cls) -> str:
        return (
            "postgresql+psycopg://"
            f"{cls._require('DB_USER')}:"
            f"{cls._require('DB_PASSWORD')}@"
            f"{cls._require('DB_HOST')}:"
            f"{getenv('DB_PORT', '5432')}/"
            f"{cls._require('DB_NAME')}"
        )
