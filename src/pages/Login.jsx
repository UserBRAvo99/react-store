import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/auth/operations'

export const Login = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const submit = data => {
		console.log(data)
		dispatch(loginThunk(data))
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input placeholder='Enter email' type='text' {...register('email')} />
				<input placeholder='Enter password' type='text' {...register('password')} />
				<button>Login</button>
			</form>
		</div>
	)
}
