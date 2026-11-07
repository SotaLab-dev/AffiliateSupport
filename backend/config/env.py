# config/env.py

import os


class Env:
    DMM_API_ID = os.getenv("DMM_API_ID")

    DMM_AFFILIATE_ID = os.getenv("DMM_AFFILIATE_ID")

    OLLAMA_URL = os.getenv("OLLAMA_URL")

    OLLAMA_MODEL = os.getenv("OLLAMA_MODEL")
