import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://cute-todo-api-rwtq.onrender.com/api',
})

const setToken = token => {
	api.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = () => {
	api.defaults.headers.common.Authorization = ``
}

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
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
	try {
		await api.post('/auth/logout')
		clearToken()
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
	const savedToken = thunkApi.getState().auth.token

	if (!savedToken) {
		return thunkApi.rejectWithValue('Token is not exist')
	}

	setToken(savedToken)
	try {
		const { data } = await api.get('/auth/current')
		console.log(data)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
