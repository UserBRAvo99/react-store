import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<div>helllo</div>} />
			</Routes>
		</BrowserRouter>
	)
}
