import { createSlice } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodoThunk } from './operations'

const initialState = {
	todos: [{ id: '1', text: 'Redux' }],
}
const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		deleteTodo: (state, action) => {
			// const item = state.todos.findIndex(item => item.id === action.payload)
			// state.todos.splice(item, 1)
			// ===
			state.todos = state.todos.filter(item => item.id !== action.payload)
		},
		addTodo: (state, action) => {
			state.todos.push(action.payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(addTodoThunk.fulfilled, (state, action) => {
				state.todos.push(action.payload)
			})
			.addCase(fetchTodoThunk.fulfilled, (state, { payload }) => {
				state.todos = payload
			})
			.addCase(deleteTodoThunk.fulfilled, (state, action) => {
				state.todos = state.todos.filter(item => item._id !== action.payload._id)
			})
	},
})

export const todoReducer = todoSlice.reducer
export const { deleteTodo, addTodo } = todoSlice.actions
