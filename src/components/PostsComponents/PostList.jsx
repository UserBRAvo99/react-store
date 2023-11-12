import { useSelector } from 'react-redux'
import { PostCard } from './PostCard'

export const PostList = () => {
	const { posts } = useSelector(state => state.posts)
	return (
		<ul>
			{posts.map(item => (
				<PostCard key={item.id} {...item} />
			))}
		</ul>
	)
}
