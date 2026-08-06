import os
import json

from langchain_core.documents import Document
from langchain_community.document_loaders import PyMuPDFLoader


def load_json(json_folder):

    documents=[]


    for file in os.listdir(json_folder):

        if file.endswith(".json"):


            with open(
                os.path.join(json_folder,file),
                "r",
                encoding="utf-8"
            ) as f:


                data=json.load(f)


            for record in data:


                keywords = record.get("keywords","")

                if isinstance(keywords,list):
                    keywords=", ".join(keywords)


                related = record.get("related_topics","")

                if isinstance(related,list):
                    related=", ".join(related)



                text=f"""

Question:
{record.get('question','')}


Answer:
{record.get('answer','')}


Category:
{record.get('category','')}


Subtopic:
{record.get('subtopic','')}


Keywords:
{keywords}


Related Topics:
{related}


Precautions:
{record.get('precautions','')}

"""


                documents.append(

                    Document(

                        page_content=text.strip(),

                        metadata={

                            "source":"JSON",
                            "file":file,
                            "dataset":record.get("dataset"),
                            "category":record.get("category"),
                            "subtopic":record.get("subtopic"),
                            "type":"JSON"

                        }

                    )

                )


    return documents

def load_pdf(pdf_folder):
    documents=[]
    for file in os.listdir(pdf_folder):
        if file.endswith(".pdf"):
            loader=PyMuPDFLoader(
                os.path.join(pdf_folder,file)
            )
            documents.extend(loader.load())
    return documents