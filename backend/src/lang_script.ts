// Importa las clases necesarias de los módulos de langchain para el procesamiento de documentos
import { OpenAI } from "langchain"; // Importa la clase OpenAI del módulo langchain
import { RetrievalQAChain } from "langchain/chains"; // Importa la clase RetrievalQAChain del módulo langchain/chains
import { PDFLoader } from "langchain/document_loaders/fs/pdf"; // Importa la clase PDFLoader del módulo langchain/document_loaders/fs/pdf
import { OpenAIEmbeddings } from "langchain/embeddings/openai"; // Importa la clase OpenAIEmbeddings del módulo langchain/embeddings/openai
import { MemoryVectorStore } from "langchain/vectorstores/memory"; // Importa la clase MemoryVectorStore del módulo langchain/vectorstores/memory

// Define una función asíncrona llamada process_doc que toma dos parámetros: filename y question
export const process_doc = async (filename: string | undefined, question: string) => {
    // Crea una nueva instancia del modelo OpenAI sin ningún argumento
    const model = new OpenAI({});
    
    // Crea una instancia del cargador de PDF especificando la ruta del archivo PDF a cargar
    // El parámetro splitPages se establece en false para cargar el documento completo en una sola entidad
    const loader = new PDFLoader(`/Users/Gabo/Documents/mobil-2/backend/uploads/${filename}`, {
        splitPages: false
    });
    
    // Carga el documento PDF especificado y espera a que se complete la carga
    const doc = await loader.load();
    
    // Crea un almacén de vectores a partir del documento cargado y embeddings de OpenAI
    const vectorStore = await MemoryVectorStore.fromDocuments(doc, new OpenAIEmbeddings());
    
    // Crea un recuperador de almacén de vectores a partir del almacén de vectores creado anteriormente
    const vectorStoreRetriever = vectorStore.asRetriever();
    
    // Crea una cadena de recuperación de preguntas y respuestas utilizando el modelo de lenguaje especificado y el recuperador de almacén de vectores
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    
    // Hace una llamada a la cadena de recuperación de preguntas y respuestas con la pregunta especificada y espera la respuesta
    const response = await chain.call({
        query: question,
    });

    // Retorna la respuesta generada por la cadena de recuperación de preguntas y respuestas
    return response;
};
