import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	loading: false,
	error: null,
	isLoggedIn: false,
	isRefresh: false,
}
const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.user.name
				state.user.email = payload.user.email
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.name
				state.user.email = payload.email
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, state => {
				state.user = initialState.user
				state.isLoggedIn = false
				state.token = ''
			})
	},
})

export const authReducer = slice.reducer
