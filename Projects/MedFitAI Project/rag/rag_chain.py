# from langchain_core.runnables import RunnableLambda
# from langchain_core.runnables import RunnablePassthrough
# from langchain_core.output_parsers import StrOutputParser

# from rag.prompts import prompt

# def format_docs(docs):

#     print("\n========== CONTEXT SENT TO LLM ==========")

#     print("NUMBER OF DOCUMENTS:", len(docs))


#     context = ""

#     for i, doc in enumerate(docs):

#         print("\nDOCUMENT:", i)

#         print(doc.page_content[:500])


#         context += "\n\n" + doc.page_content


#     print("\n========== CONTEXT LENGTH ==========")
#     print(len(context))


#     return context

# def build_chain(llm,retriever):

#     def check_context(inputs):

#         context = inputs["context"]

#         if len(context.strip()) < 50:
#             return {
#                 "context": "",
#                 "question": inputs["question"]
#             }

#         return inputs


#     rag_chain=(

#         {
#             "context":retriever | RunnableLambda(format_docs),
#             "question":RunnablePassthrough()
#         }

#         | RunnableLambda(check_context)

#         | prompt
#         | llm
#         | StrOutputParser()

#     )

#     return rag_chain


from operator import itemgetter

from langchain_core.runnables import RunnableLambda
from langchain_core.output_parsers import StrOutputParser

from rag.prompts import prompt


def format_docs(docs):

    print("\n========== CONTEXT SENT TO LLM ==========")
    print("NUMBER OF DOCUMENTS:", len(docs))

    context = ""

    for i, doc in enumerate(docs):
        print(f"\nDOCUMENT: {i}")
        print(doc.page_content[:300])
        context += "\n\n" + doc.page_content

    return context


def build_chain(llm, retriever):

    rag_chain = (
        {
            "context": itemgetter("question") | retriever | RunnableLambda(format_docs),
            "question": itemgetter("question"),
        }
        | prompt
        | llm
        | StrOutputParser()
    )

    return rag_chain