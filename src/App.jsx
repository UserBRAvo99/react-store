import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home'
import { Counter } from './pages/Counter'
import { Posts } from './pages/Posts'
import { TodoList } from './pages/TodoList'

//https://node-api-solution.onrender.com/api/auth/register
//https://node-api-solution.onrender.com/api/auth/login
//https://node-api-solution.onrender.com/api/auth/logout
//https://node-api-solution.onrender.com/api/auth/current
// https://cute-todo-api-rwtq.onrender.com/api/auth/register
// https://cute-todo-api-rwtq.onrender.com/api/auth/login
// https://cute-todo-api-rwtq.onrender.com/api/auth/logout

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/counter' element={<Counter />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/todos' element={<TodoList />} />
				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
