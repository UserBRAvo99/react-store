import { styled } from 'styled-components'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from '../../redux/auth/operations'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'
export const Header = () => {
	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(logoutThunk())
	}
	const { name } = useSelector(selectUser)
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<div>
			<StyledHeader>
				<div>Posts</div>
				<NavHeader>
					<StyledLink to='/'>Home</StyledLink>

					{!isLoggedIn && (
						<>
							<StyledLink to='/login'>Login</StyledLink>
							<StyledLink to='/register'>Register</StyledLink>
						</>
					)}
					{isLoggedIn && (
						<>
							<StyledLink to='/counter'>Counter</StyledLink>
							<StyledLink to='/posts'>Posts</StyledLink>
							<StyledLink to='/todos'>Tasks</StyledLink>
							<button onClick={handleLogout}>Logout</button>
						</>
					)}
				</NavHeader>
				<h2>{name}</h2>
			</StyledHeader>
			<Outlet />
		</div>
	)
}
export const StyledLink = styled(NavLink)`
	text-decoration: none;
	color: white;
	&.active {
		color: black;
	}
`
export const StyledHeader = styled.header`
	padding: 20px 150px;
	background-color: ${props => (props.$color ? 'red' : 'green')};
	position: sticky;
	top: 0;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	color: white;
	font-weight: bold;
	font-size: 2rem;
`
const NavHeader = styled.nav`
	display: flex;
	gap: 20px;
`
