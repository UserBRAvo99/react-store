import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodoThunk, updateCheckedTodoThunk } from '../redux/operations'
import { selectCurrentItem, selectTodosLoading } from '../redux/auth/selectors'

export const TodoList = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTodoThunk())
	}, [dispatch])

	const [value, setValue] = useState('')
	const { todos } = useSelector(state => state.todoList)
	const loading = useSelector(selectTodosLoading)
	const currentItem = useSelector(selectCurrentItem)
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
	const handleToggleTodd = todo => {
		console.log(todo)
		dispatch(updateCheckedTodoThunk(todo))
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
						<input type='checkbox' checked={todo.completed} onChange={() => handleToggleTodd(todo)} />
						{todo.title}{' '}
						<button onClick={() => !loading && handleDelete(todo._id)}>
							{loading && currentItem === todo._id ? 'loading...' : 'Delete'}{' '}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
