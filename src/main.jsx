import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Global } from './styles/Global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
		<Global />
		<ToastContainer
			position='bottom-center'
			autoClose={1000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='dark'
		/>
	</Provider>
)
