import { createSlice } from '@reduxjs/toolkit'

// Створюємо початковий стан
const initialState = {
	counter: 0,
	step: 1,
}

const counterSLice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.counter += state.step
		},
		decrement: state => {
			state.counter -= state.step
		},
		reset: state => {
			state.counter = 1
		},
		setStep: (state, action) => {
			state.step = action.payload
		},
	},
})

export const counterReducer = counterSLice.reducer
export const { increment, decrement, reset, setStep } = counterSLice.actions
