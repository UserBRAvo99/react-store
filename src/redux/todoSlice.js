import { createSlice } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodoThunk } from './operations'

const initialState = {
	todos: [{ id: '1', text: 'Redux' }],
	currentItem: null,
	loading: false,
}
const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setCurrentItem: (state, action) => {
			state.currentItem = action.payload
		},
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
				state.loading = false
			})
			.addCase(deleteTodoThunk.pending, state => {
				state.loading = true
			})
			.addCase(deleteTodoThunk.rejected, state => {
				state.loading = false
			})
	},
})

export const todoReducer = todoSlice.reducer
export const { deleteTodo, addTodo, setCurrentItem } = todoSlice.actions
