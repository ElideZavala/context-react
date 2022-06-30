import { useContext }  from 'react'
import UserContext from '../contexts/UserContext'

const Movie = ({ movie }) => {
	const { user, toggleFavoriteMovieToUser } = useContext(UserContext); 

	const imgStyles = {
		height: '290px',
		objectFit: 'cover',
	}

	// Comprovar si este arrglo contiene esta pelicula, si es sierto la variable sera True(success)
	// Antes de hacer una operacion sobre un arreglo es recomendable colocar el signo ?
	const isFavorite = user?.favoriteMovie?.includes(movie.id);
 
	return (
	 <div className='card'>
		<img
			src={movie.imageUrl}
			alt={movie.title}
			className="card-img-top"
			style={imgStyles}
		/>
		<div className='card-body'>
			<h4>{movie.title}</h4>
			{ user?.id &&
			<button className={
				`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
				onClick={()=> toggleFavoriteMovieToUser(movie.id)}
			>
				Favorito
			</button>
			}
		</div>
	 </div>
  )
}

export default Movie