import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

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
				state.isRefresh = false
			})
			.addCase(refreshThunk.pending, state => {
				state.isRefresh = true
			})
			.addCase(refreshThunk.rejected, state => {
				state.isRefresh = false
			})
			.addCase(logoutThunk.fulfilled, state => {
				state.user = initialState.user
				state.isLoggedIn = false
				state.token = ''
			})
			.addMatcher(isAnyOf(loginThunk.pending, logoutThunk.pending, registerThunk.pending), state => {
				state.loading = true
				state.error = null
			})

		// .addMatcher(isAnyOf(loginThunk.pending, logoutThunk.pending, registerThunk.pending), state => {
		// 	state.loading = true
		// 	state.error = null
		// })
	},
})

export const authReducer = slice.reducer
