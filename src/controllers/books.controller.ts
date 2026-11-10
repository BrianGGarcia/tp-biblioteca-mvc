import type { Request, Response } from "express"
import { Book } from "../models/book.model.ts"

const getBooks = async (_req: Request, res: Response) => {
    try {
        const books = await Book.find()

        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los libros"
        })
    }
}

export { getBooks }