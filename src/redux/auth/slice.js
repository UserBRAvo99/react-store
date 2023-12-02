import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, refreshThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	loading: false,
	error: null,
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
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.name
				state.user.email = payload.email
			})
	},
})

export const authReducer = slice.reducer
