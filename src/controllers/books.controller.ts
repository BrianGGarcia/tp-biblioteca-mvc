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

const getBookById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const book = await Book.findById(id)

        if (!book) {
            return res.status(404).json({
                error: "Libro no encontrado"
            })
        }

        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el libro"
        })
    }
}

export { getBooks, getBookById }