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