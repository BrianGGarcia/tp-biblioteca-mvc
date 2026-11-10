# API RESTful de Biblioteca Digital

Trabajo práctico realizado con **Node.js**, **Express**, **TypeScript**, **MongoDB** y **Mongoose**.

El objetivo del proyecto es desarrollar una API RESTful para gestionar una colección de libros utilizando una estructura basada en el patrón **MVC**.

## Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- Git

## Modelo Book

Cada libro contiene los siguientes datos:

- `title`: título del libro.
- `author`: autor del libro.
- `publishedYear`: año de publicación.
- `genre`: género.
- `available`: indica si el libro está disponible.

Los campos `title` y `author` son obligatorios.

El título debe ser único y `available` tiene como valor predeterminado `true`.

## Endpoints

### Listar todos los libros

```http
GET /books
```

### Obtener un libro por ID

```http
GET /books/:id
```

### Crear un libro

```http
POST /books
```

Ejemplo de body:

```json
{
  "title": "El Hobbit",
  "author": "J. R. R. Tolkien",
  "publishedYear": 1937,
  "genre": "Fantasía"
}
```

### Actualizar un libro

```http
PATCH /books/:id
```

Ejemplo:

```json
{
  "available": false
}
```

### Eliminar un libro

```http
DELETE /books/:id
```

## Estructura del proyecto

```text
src/
├── config/
├── controllers/
├── interfaces/
├── models/
├── routes/
└── index.ts
```

La aplicación utiliza una organización basada en MVC para separar las responsabilidades del proyecto.

## Instalación

Después de clonar el repositorio, instalar las dependencias:

```bash
npm install
```

Luego crear un archivo `.env` en la raíz del proyecto.

Se incluye un archivo `.env.example` con las variables necesarias:

```env
PORT=
URI_DB=
```

Por ejemplo, utilizando MongoDB local:

```env
PORT=3000
URI_DB=mongodb://127.0.0.1:27017/biblioteca-digital
```

## Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Para compilar TypeScript:

```bash
npm run build
```

Para ejecutar la versión compilada:

```bash
npm start
```

## Respuestas de la API

Las respuestas utilizan una estructura común.

En operaciones exitosas:

```json
{
  "success": true,
  "data": {}
}
```

En caso de error:

```json
{
  "success": false,
  "error": "Descripción del error"
}
```

También se manejan casos como:

- ID inválido.
- Libro inexistente.
- Campos obligatorios faltantes.
- Títulos duplicados.
- Datos inválidos al actualizar.