import {Router} from 'express'
import { createTodo, getTodod, updateTodo } from '../controllers/todos'
const router = Router()

router.post('/', createTodo)
router.get('/', getTodod)
router.patch('/:id', updateTodo)
router.delete('/:id')

export default router