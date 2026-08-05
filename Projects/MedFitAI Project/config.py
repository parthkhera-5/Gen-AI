# import os
# from dotenv import load_dotenv

# load_dotenv()

# GROQ_API_KEY = os.getenv("GROQ_API_KEY")
# if not GROQ_API_KEY:
#     raise ValueError("GROQ_API_KEY not found in .env")

# CHROMA_PATH = "./database/chroma"
# EMBEDDING_MODEL = "BAAI/bge-small-en-v1.5"
# LLM_MODEL = "llama-3.3-70b-versatile"
# TOP_K = 5
# JSON_PATH="./data/JSON dataset"
# PDF_PATH="./data/PDF dataset"
# CHUNK_SIZE=500
# CHUNK_OVERLAP=50


import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()


BASE_DIR = Path(__file__).resolve().parent


GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY not found in .env")

CHROMA_PATH = BASE_DIR / "database" / "chroma"
JSON_PATH = BASE_DIR / "data" / "JSON dataset"
PDF_PATH = BASE_DIR / "data" / "PDF dataset"
EMBEDDING_MODEL = "BAAI/bge-small-en-v1.5"
LLM_MODEL = "llama-3.3-70b-versatile"
TOP_K = 5
CHUNK_SIZE = 800
CHUNK_OVERLAP = 150