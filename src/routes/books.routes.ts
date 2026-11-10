import { Router } from "express"
import { getBooks, getBookById } from "../controllers/books.controller.ts"

const booksRouter = Router()

booksRouter.get("/", getBooks)
booksRouter.get("/:id", getBookById)

export { booksRouter }