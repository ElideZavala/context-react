import { useContext } from 'react'
import Movie from './Movie'
import MoviesContext from '../contexts/MoviesContext';

const MovieList = () => {
	
	const { movies } = useContext(MoviesContext);

  return (
	 <div className='container'>
		<div className='row'>
			{movies.map(movie => (
				<div className='col-md-4' key={movie.id}>
					<Movie
						movie={ movie }
					/>
				</div>
			))}
		</div>
	 </div>
  )
}

export default MovieList;