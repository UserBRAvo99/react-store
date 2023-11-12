import { nanoid } from '@reduxjs/toolkit'
import moment from 'moment/moment'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/postsSlice'

export const AddForm = () => {
	const dispatch = useDispatch()

	const { register, reset, handleSubmit } = useForm()
	const submit = data => {
		console.log(data)
		const newPost = { ...data, id: nanoid(), author: 'Roman', time: moment().format('DD/MM/YYYY hh:mm:ss') }
		dispatch(addPost(newPost))
		reset()
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input type='text' {...register('title', { required: true })} placeholder='enter the title' />
				<textarea type='text' {...register('description', { required: true })} placeholder='enter the title' />

				<button>Add post</button>
			</form>
		</div>
	)
}
