import { AddForm } from '../components/PostsComponents/AddForm'

export const Posts = () => {
	return (
		<div>
			<AddForm />
			<ul>
				<li>
					<div>
						<h2>Title</h2>
						<p>Description</p>
						<p>time</p>
						<p>author</p>
						<button>Delete</button>
					</div>
				</li>
			</ul>
		</div>
	)
}
