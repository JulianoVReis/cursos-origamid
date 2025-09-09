import React from 'react'
import './Header.css'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()

	React.useEffect(() => {
		console.log('Mudou a rota')
	}, [location])

  return (
    <nav>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to='/sobre' className={({ isActive }) => (isActive ? 'active' : '')}>
        Sobre
      </NavLink>{' '}
      |{' '}
      <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>
        Login
      </NavLink>
    </nav>
  )
}

export default Header
