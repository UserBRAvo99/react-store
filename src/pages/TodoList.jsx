import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodoThunk } from '../redux/operations'

export const TodoList = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTodoThunk())
	}, [dispatch])

	const [value, setValue] = useState('')
	const { todos } = useSelector(state => state.todoList)
	const handleSubmit = e => {
		e.preventDefault()
		console.log(value)
		const newTodo = { id: nanoid(), text: value }
		dispatch(addTodoThunk({ title: value }))
		setValue('')
	}
	const handleDelete = id => {
		console.log(id)
		dispatch(deleteTodoThunk(id))
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
				<button>Add todo</button>
			</form>
			<ul>
				{todos.map(todo => (
					<li key={todo._id}>
						{todo.title} <button onClick={() => handleDelete(todo._id)}>Delete </button>
					</li>
				))}
			</ul>
		</div>
	)
}
