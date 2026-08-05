from langchain_groq import ChatGroq
from config import LLM_MODEL,GROQ_API_KEY

def load_llm():

    return ChatGroq(
        groq_api_key=GROQ_API_KEY,
        model=LLM_MODEL,
        temperature=0,
        max_tokens=None
    )