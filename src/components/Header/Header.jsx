import { styled } from 'styled-components'
import { NavLink, Outlet } from 'react-router-dom'
export const Header = () => {
	return (
		<div>
			<StyledHeader>
				<div>Posts</div>
				<NavHeader>
					<StyledLink to='/'>Home</StyledLink>
					<StyledLink to='/counter'>Counter</StyledLink>
					<StyledLink to='/posts'>Posts</StyledLink>
					<StyledLink to='/todos'>Tasks</StyledLink>
					<StyledLink to='/login'>Login</StyledLink>
					<StyledLink to='/register'>Register</StyledLink>
				</NavHeader>
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
