import express from "express"
import { connectMongoDb } from "./config/connectMongoDb.ts"
import { booksRouter } from "./routes/books.routes.ts"

process.loadEnvFile()

const PORT = process.env.PORT
const URI_DB = process.env.URI_DB

const app = express()

app.use(express.json())

app.use("/books", booksRouter)

app.listen(PORT, () => {
    connectMongoDb(URI_DB)
    console.log(`Servidor en escucha en http://localhost:${PORT}`)
})