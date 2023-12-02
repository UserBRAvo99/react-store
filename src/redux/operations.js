import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from './auth/operations'

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
		const { data } = await api.delete(`/todos/${id}`)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
