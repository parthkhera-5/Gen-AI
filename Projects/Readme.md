# MedFit AI – RAG-Based Medical Assistant Chatbot

## 📌 Overview

**MedFit AI** is a **Retrieval-Augmented Generation (RAG)** based medical assistant chatbot that provides context-aware answers using a custom medical knowledge base instead of relying solely on a Large Language Model (LLM). The chatbot retrieves relevant information from medical datasets and WHO documents, ensuring grounded and reliable responses while reducing hallucinations.

In addition to answering medical queries, MedFit AI includes integrated **BMI Calculator** and **Daily Water Intake Calculator** tools to provide personalized health recommendations.

---

## 🚀 Features

* 🤖 RAG-based Medical Chatbot
* 📄 Medical Knowledge Base using JSON & PDF datasets
* 🔍 Semantic Search using Vector Embeddings
* 🧠 Context-Aware Responses
* 📚 WHO Medical Document Integration
* 📊 BMI Calculator
* 💧 Daily Water Intake Calculator
* 🌐 Interactive Web Interface
* ⚡ Fast Retrieval with ChromaDB

---

## 🛠️ Tech Stack

### Programming Language

* Python

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Flask

### Generative AI

* Retrieval-Augmented Generation (RAG)
* LangChain
* ChatGroq (Llama 3.3 70B)

### Embeddings & Vector Database

* Hugging Face Embeddings (BAAI/bge-small-en-v1.5)
* ChromaDB

### Data Processing

* JSON
* PDF
* Recursive Text Chunking

---

## ⚙️ Working Pipeline

```
Medical Dataset (JSON + PDF)
            │
            ▼
   Document Loading
            │
            ▼
     Data Cleaning
            │
            ▼
     Text Chunking
            │
            ▼
 Hugging Face Embeddings
            │
            ▼
     ChromaDB Storage
            │
            ▼
 Semantic Similarity Search
            │
            ▼
 Retrieved Relevant Chunks
            │
            ▼
 Prompt Template
            │
            ▼
 ChatGroq (Llama 3.3 70B)
            │
            ▼
      Final Response
```

---

## 📊 Knowledge Base

The chatbot retrieves information from:

* Medical JSON datasets
* WHO medical guidelines (PDF)
* Hypertension
* Diabetes
* Heart Disease
* Kidney Disease
* Nutrition
* Yoga
* Physiotherapy
* Sports & Fitness

---

## 💡 BMI Calculator

The BMI Calculator allows users to calculate their Body Mass Index based on height and weight.

**Formula**

```
BMI = Weight (kg) / Height² (m²)
```

The calculator categorizes users as:

* Underweight
* Normal Weight
* Overweight
* Obese

---

## 💧 Water Intake Calculator

The Water Intake Calculator estimates daily water requirements based on:

* Weight
* Activity Level
* Climate

It provides personalized hydration recommendations.

---

## 🔍 RAG Workflow

1. Load JSON and PDF documents.
2. Clean and preprocess the data.
3. Split documents into manageable chunks.
4. Generate embeddings using Hugging Face.
5. Store embeddings in ChromaDB.
6. Retrieve relevant chunks using semantic similarity.
7. Pass retrieved context to the LLM.
8. Generate grounded responses.

---

## 📷 Application Screens

* Home Page
* Chat Interface
* BMI Calculator
* Water Intake Calculator

> Add screenshots here.

---

## ▶️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/MedFit-AI.git
cd MedFit-AI
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

**Windows**

```bash
venv\Scripts\activate
```

**Linux / macOS**

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Environment Variables

Create a `.env` file:

```env
GROQ_API_KEY=your_api_key
```

### Run the Application

```bash
python app.py
```

Open:

```
http://127.0.0.1:5000
```

---

## 📈 Future Enhancements

* Voice-based interaction
* Multi-language support
* Medical report summarization
* Appointment booking integration
* User authentication
* Chat history
* Expanded medical knowledge base


