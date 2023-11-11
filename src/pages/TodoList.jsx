import { useState } from 'react'

export const TodoList = () => {
	const [value, setValue] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		console.log(value)
		setValue('')
	}
	const handleDelete = id => {
		console.log(id)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
				<button>Add todo</button>
			</form>
			<ul>
				<li>
					test <button onClick={() => handleDelete('1')}>Delete </button>
				</li>
			</ul>
		</div>
	)
}
