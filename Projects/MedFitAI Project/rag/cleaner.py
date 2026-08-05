# import re
# from langchain_core.documents import Document

# def clean_documents(documents):
#     cleaned=[]
#     for doc in documents:
#         text=doc.page_content
#         text=re.sub(r"\n+","\n",text)
#         text=re.sub(r"\s+"," ",text)
#         text = re.sub(r"\t+"," ",text)
#         cleaned.append(Document(page_content=text.strip(),metadata=doc.metadata))
#     return cleaned


import re
from langchain_core.documents import Document


def clean_documents(documents):

    cleaned=[]


    for doc in documents:

        text=doc.page_content


        text=re.sub(
            r"\n+",
            "\n",
            text
        )


        text=re.sub(
            r"[ \t]+",
            " ",
            text
        )


        cleaned.append(

            Document(

                page_content=text.strip(),

                metadata=doc.metadata

            )

        )


    return cleaned