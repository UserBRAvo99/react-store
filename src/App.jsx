import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home'
import { Counter } from './pages/Counter'
import { Posts } from './pages/Posts'
import { TodoList } from './pages/TodoList'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from './redux/auth/operations'
import { selectIsLoggedIn, selectIsRefresh } from './redux/auth/selectors'

// TEST GIT FN
export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const isRefresh = useSelector(selectIsRefresh)
	return isRefresh ? (
		<h1>Loading...</h1>
	) : (
		<BrowserRouter>
			<Header />
			{isLoggedIn ? (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/counter' element={<Counter />} />
					<Route path='/posts' element={<Posts />} />
					<Route path='/todos' element={<TodoList />} />
					<Route path='*' element={<h1>Not found</h1>} />
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<h1>Not found</h1>} />
				</Routes>
			)}
		</BrowserRouter>
	)
}
