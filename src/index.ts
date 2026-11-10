import { connectMongoDb } from "./config/connectMongoDb.ts"

process.loadEnvFile()

const URI_DB = process.env.URI_DB

connectMongoDb(URI_DB)