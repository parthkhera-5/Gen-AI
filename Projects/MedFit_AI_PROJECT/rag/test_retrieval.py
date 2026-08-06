from langchain_chroma import Chroma
from rag.embeddings import load_embeddings
from config import CHROMA_PATH


embedding = load_embeddings()


db = Chroma(
    persist_directory=CHROMA_PATH,
    embedding_function=embedding
)


query = "Symptoms of Diabetes"


results = db.similarity_search_with_score(
    query,
    k=5
)


for i,(doc,score) in enumerate(results):

    print("\n====================")
    print("RESULT:",i)
    print("SCORE:",score)
    print(doc.page_content[:500])
    print(doc.metadata)