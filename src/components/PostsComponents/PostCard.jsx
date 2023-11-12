import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/postsSlice'

export const PostCard = ({ id, title, description, time, author }) => {
	const dispatch = useDispatch()

	return (
		<li>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
				<p>{time}</p>
				<p>{author}</p>
				<button onClick={() => dispatch(deletePost(id))}>Delete</button>
			</div>
		</li>
	)
}
