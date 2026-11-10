import type { Request, Response } from "express"
import { Book } from "../models/book.model.ts"

const getBooks = async (_req: Request, res: Response) => {
    try {
        const books = await Book.find()

        res.status(200).json({
            success: true,
            data: books
        })
    } catch (error) {
        res.status(500).json({
            success: false,
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
                success: false,
                error: "Libro no encontrado"
            })
        }

        res.status(200).json({
            success: true,
            data: book
        })
    } catch (error) {
        if (error instanceof Error && error.name === "CastError") {
            return res.status(400).json({
                success: false,
                error: "ID inválido"
            })
        }

        res.status(500).json({
            success: false,
            error: "Error al obtener el libro"
        })
    }
}

const createBook = async (req: Request, res: Response) => {
    try {
        const body = req.body

        const newBook = await Book.create(body)

        res.status(201).json({
            success: true,
            data: newBook
        })
    } catch (error) {
        if (typeof error === "object" && error !== null && "code" in error && error.code === 11000) {
            return res.status(409).json({
                success: false,
                error: "Ya existe un libro con ese título"
            })
        }

        if (error instanceof Error && error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                error: "Faltan campos obligatorios"
            })
        }

        res.status(500).json({
            success: false,
            error: "Error al crear el libro"
        })
    }
}

const updateBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const body = req.body

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            body,
            {
                returnDocument: "after",
                runValidators: true
            }
        )

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                error: "Libro no encontrado"
            })
        }

        res.status(200).json({
            success: true,
            data: updatedBook
        })
    } catch (error) {
        if (error instanceof Error && error.name === "CastError") {
            return res.status(400).json({
                success: false,
                error: "ID inválido"
            })
        }

        if (error instanceof Error && error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                error: "Datos inválidos"
            })
        }

        res.status(500).json({
            success: false,
            error: "Error al actualizar el libro"
        })
    }
}

const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const deletedBook = await Book.findByIdAndDelete(id)

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                error: "Libro no encontrado"
            })
        }

        res.status(200).json({
            success: true,
            message: "Libro eliminado correctamente"
        })
    } catch (error) {
        if (error instanceof Error && error.name === "CastError") {
            return res.status(400).json({
                success: false,
                error: "ID inválido"
            })
        }

        res.status(500).json({
            success: false,
            error: "Error al eliminar el libro"
        })
    }
}

export {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}