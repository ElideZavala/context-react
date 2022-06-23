import React from 'react'

const Navbar = () => {

	const user = null

	return (
		<nav className='navbar navbar-dark bg-dark mb-4'>
			<div className='container'>
				<span className='navbar-brand'>
					<h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
				</span>

				{ user
					? 	<button className='btn btn-primary'>
							Cerrar Sesión
						</button>
					: 	<button className='btn btn-primary'>
							Iniciar Sesión
						</button>
				}
			</div>
		</nav>	
	)
}

export default Navbar