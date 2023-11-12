import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

export const TodoList = () => {
	const [value, setValue] = useState('')
	const { todos } = useSelector(state => state.todoList)
	const dispatch = useDispatch()
	const handleSubmit = e => {
		e.preventDefault()
		console.log(value)
		const newTodo = { id: nanoid(), text: value }
		dispatch(addTodo(newTodo))
		setValue('')
	}
	const handleDelete = id => {
		console.log(id)
		dispatch(deleteTodo(id))
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
				<button>Add todo</button>
			</form>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						{todo.text} <button onClick={() => handleDelete(todo.id)}>Delete </button>
					</li>
				))}
			</ul>
		</div>
	)
}
