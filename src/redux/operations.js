import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from './auth/operations'
import { setCurrentItem } from './todoSlice'

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkApi) => {
	try {
		const { data } = await api.post('/todos', body)
		console.log(data)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const fetchTodoThunk = createAsyncThunk('fetchTodos', async (_, thunkApi) => {
	try {
		const { data } = await api.get('/todos')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('deleteTodos', async (id, thunkApi) => {
	try {
		thunkApi.dispatch(setCurrentItem(id))
		const { data } = await api.delete(`/todos/${id}`)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const updateCheckedTodoThunk = createAsyncThunk('toggleCompleted', async (todo, thunkApi) => {
	try {
		const { data } = await api.patch(`/todos/${todo._id}`, { title: 'React is so cool', completed: !todo.completed })
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
