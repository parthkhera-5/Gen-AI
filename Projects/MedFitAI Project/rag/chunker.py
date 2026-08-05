# from langchain_text_splitters import RecursiveCharacterTextSplitter
# from config import CHUNK_OVERLAP, CHUNK_SIZE

# def chunk_documents(documents):

#     splitter = RecursiveCharacterTextSplitter(
#         chunk_size=CHUNK_SIZE,
#         chunk_overlap=CHUNK_OVERLAP,
#         separators=[
#             "\n\n",
#             "\n",
#             " ",
#             ""
#         ]
#     )

#     chunks = splitter.split_documents(documents)

#     return chunks








from langchain_text_splitters import RecursiveCharacterTextSplitter
from config import CHUNK_SIZE, CHUNK_OVERLAP


def chunk_documents(documents):

    splitter = RecursiveCharacterTextSplitter(

        chunk_size=CHUNK_SIZE,

        chunk_overlap=CHUNK_OVERLAP,

        separators=[
            "\n\n",
            "\n",
            ".",
            " ",
            ""
        ]

    )


    return splitter.split_documents(documents)