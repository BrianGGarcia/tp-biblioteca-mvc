import { Router } from "express"
import { getBooks } from "../controllers/books.controller.ts"

const booksRouter = Router()

booksRouter.get("/", getBooks)

export { booksRouter }