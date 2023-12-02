import { createSlice } from '@reduxjs/toolkit'
import { loginThunk } from './operations'

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
		builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
			state.user.name = payload.user.name
			state.user.email = payload.user.email
			state.token = payload.token
		})
	},
})

export const authReducer = slice.reducer
