import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://cute-todo-api-rwtq.onrender.com/api',
})

export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
	try {
		const { data } = await api.post('/auth/register', credentials)
		console.log(data)
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const loginThunk = createAsyncThunk('login', async (credentials, thunkApi) => {
	try {
		const { data } = await api.post('/auth/login', credentials)
		console.log(data)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
