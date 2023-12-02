import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { todoReducer } from './todoSlice'
import { postReducer } from './postsSlice'
import { authReducer } from './auth/slice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'todoAuth',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		counterSlice: counterReducer,
		todoList: todoReducer,
		posts: postReducer,
		auth: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
