# import os
# from langchain_chroma import Chroma
# from config import CHROMA_PATH


# def load_vector_db(embedding):

#     print("\n========== CHROMA PATH ==========")
#     print(CHROMA_PATH)
#     print(os.path.abspath(CHROMA_PATH))

#     return Chroma(
#         persist_directory=CHROMA_PATH,
#         embedding_function=embedding
#     )






from langchain_chroma import Chroma
from config import CHROMA_PATH


def load_vector_db(embedding):

    print("\n========== CHROMA PATH ==========")
    print(CHROMA_PATH)

    db = Chroma(
        persist_directory=str(CHROMA_PATH),
        embedding_function=embedding,
        collection_name="medfit_ai"
    )

    print(
        "TOTAL DOCUMENTS:",
        db._collection.count()
    )

    return db