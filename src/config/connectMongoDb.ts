import mongoose from "mongoose"

const connectMongoDb = async (uri: string | undefined) => {
    try {
        if (!uri) {
            throw new Error("No se encontró URI_DB")
        }

        await mongoose.connect(uri)
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log("No se pudo conectar a MongoDB")
    }
}

export { connectMongoDb }