import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../redux/auth/operations'

export const Register = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const submit = data => {
		console.log(data)
		dispatch(registerThunk(data))
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input placeholder='Enter name' type='text' {...register('name')} />
				<input placeholder='Enter email' type='text' {...register('email')} />
				<input placeholder='Enter password' type='text' {...register('password')} />
				<button>Register</button>
			</form>
		</div>
	)
}
