import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { todoReducer } from './todoSlice'
import { postReducer } from './postsSlice'

export const store = configureStore({
	reducer: {
		counterSlice: counterReducer,
		todoList: todoReducer,
		posts: postReducer,
	},
})
