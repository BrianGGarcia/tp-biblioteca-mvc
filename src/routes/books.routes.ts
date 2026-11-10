import { Router } from "express"
import { getBooks, getBookById, createBook } from "../controllers/books.controller.ts"

const booksRouter = Router()

booksRouter.get("/", getBooks)
booksRouter.get("/:id", getBookById)
booksRouter.post("/", createBook)

export { booksRouter }