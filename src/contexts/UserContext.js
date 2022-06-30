import { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
	id: 1,
	name: 'Elide',
	favoriteMovie: [1, 2]
}

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(initialUser);

	const login = () => {
		setUser(initialUser);
	}

	const logout = () => {
		setUser(null)
	}

	const toggleFavoriteMovieToUser = (movieId) => {
		// Nos traemos al mismo usuario, so que en este caso modificamos el arreglo de favoritas

		const isFavorite = user.favoriteMovie.includes(movieId);
		const favoriteMovie = isFavorite
			? user.favoriteMovie.filter(favMovId => favMovId !== movieId) // Delete
			: [...user.favoriteMovie, movieId]; // Add

		// Actualizamos el usuario
		setUser({
			...user,
			// Modificamos el arreglo de favoritas
			favoriteMovie
		})
	}

	const data = { user, login, logout, toggleFavoriteMovieToUser}

	return (
		<UserContext.Provider value={data}>
			{children}
		</UserContext.Provider>
	)
}

export { UserProvider }
export default UserContext;