from rag.loader import load_json, load_pdf
from rag.cleaner import clean_documents
from rag.chunker import chunk_documents
from rag.embeddings import load_embeddings
from langchain_chroma import Chroma
from config import CHROMA_PATH

JSON_FOLDER="./data/JSON dataset"
PDF_FOLDER="./data/PDF dataset"

print("Loading JSON files...")
json_docs = load_json(JSON_FOLDER)
print("JSON Documents:",len(json_docs))

print("Loading PDFs...")

pdf_docs = load_pdf(PDF_FOLDER)

print("PDF Documents:",len(pdf_docs))

documents = json_docs + pdf_docs

documents = clean_documents(documents)

print("Cleaning completed")

chunks = chunk_documents(documents)

print("Chunks:",len(chunks))

embedding = load_embeddings()

print("Embedding model loaded")

db = Chroma.from_documents(

    documents=chunks,

    embedding=embedding,

    persist_directory=str(CHROMA_PATH),

    collection_name="medfit_ai"

)

print("Creating Chroma DB...")

print("✅ Chroma DB Created Successfully")