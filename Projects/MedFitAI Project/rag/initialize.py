


from rag.embeddings import load_embeddings
from rag.vectordb import load_vector_db
from rag.retriever import load_retriever
from rag.llm import load_llm
from rag.rag_chain import build_chain


embedding = load_embeddings()


vector_db = load_vector_db(
    embedding
)


retriever = load_retriever(
    vector_db
)


print("\n========== FLASK RETRIEVER TEST ==========")


docs = retriever.invoke(
    "What is diabetes mellitus and what are its common symptoms?"
)


print("Documents found:", len(docs))


for i, doc in enumerate(docs):

    print("\n----------------")
    print("DOCUMENT:", i)

    print(doc.page_content[:500])

    print(doc.metadata)



llm = load_llm()


rag_chain = build_chain(
    llm,
    retriever
)