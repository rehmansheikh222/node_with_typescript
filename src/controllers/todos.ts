import { NextFunction, Request, RequestHandler, Response } from "express";
import { Todo } from "../models.ts/todo";
// export const createTodo = (req: Request, res: Response, next: NextFunction) => {}

const TODOS : Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text
    const newTodo = new Todo(Math.random().toString(), text)

    TODOS.push(newTodo)

    res.status(201).json({message:'Created the todo',createdTodo: newTodo} )
}

export const getTodod: RequestHandler = (req, res, next) => {
    res.status(200).json({todos: TODOS})
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id

    const updatedText = (req.body as {text: string}).text

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

    if(todoIndex < 0) {
        throw new Error('Could not find todo!!')
    }

    TODOS[todoIndex].text = updatedText

    res.status(201).json({message: "Updated", updatedTodo: TODOS[todoIndex]})
}