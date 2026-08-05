# from config import TOP_K
# def load_retriever(vector_db):
#     retriever = vector_db.as_retriever(
#         search_type="similarity",
#         search_kwargs={"k":TOP_K}
#     )
#     return retriever

from config import TOP_K


def load_retriever(vector_db):

    retriever = vector_db.as_retriever(

        search_type="similarity",

        search_kwargs={
            "k": TOP_K
        }

    )

    return retriever