import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	posts: [{ id: '1', title: 'Learn redux', description: 'Redux - library', time: '', author: 'Alan P.' }],
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		deletePost: (state, action) => {
			state.posts = state.posts.filter(item => item.id !== action.payload)
		},
		addPost: (state, action) => {
			state.posts.push(action.payload)
		},
	},
})

export const postReducer = postsSlice.reducer
export const { deletePost, addPost } = postsSlice.actions
