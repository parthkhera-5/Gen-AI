# from flask import Blueprint, request, jsonify

# from rag.initialize import rag_chain


# chatbot = Blueprint("chatbot",__name__)


# @chatbot.route("/chat", methods=["POST"])
# def chat():

#     data = request.get_json()

#     question = data.get(
#         "message",
#         ""
#     )

#     try:

#         # answer = rag_chain.invoke(question)

#         answer = rag_chain.invoke(
#             {
#                 "question": question
#             }
#         )
#         return jsonify(
#             {
#                 "question": question,
#                 "answer": answer
#             }
#         )


#     except Exception as e:

#         return jsonify(
#             {
#                 "error": str(e)
#             }
#         )



from flask import Blueprint, request, jsonify

from rag.initialize import rag_chain, retriever

chatbot = Blueprint("chatbot", __name__)


@chatbot.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    print("\n==============================")
    print("REQUEST JSON:")
    print(data)

    question = data.get("message", "")

    print("\nQUESTION:")
    print(question)

    try:

        # Test the retriever separately
        docs = retriever.invoke(question)

        print("\n========== FLASK RETRIEVER ==========")
        print("NUMBER OF DOCUMENTS:", len(docs))

        for i, doc in enumerate(docs):

            print("\n----------------")
            print(f"DOCUMENT: {i}")
            print(doc.page_content[:500])
            print(doc.metadata)

        # Now call the RAG chain
        answer = rag_chain.invoke(
            {
                "question": question
            }
        )

        print("\n========== LLM ANSWER ==========")
        print(answer)

        return jsonify(
            {
                "question": question,
                "answer": answer
            }
        )

    except Exception as e:

        print("\n========== ERROR ==========")
        print(e)

        return jsonify(
            {
                "error": str(e)
            }
        ), 500