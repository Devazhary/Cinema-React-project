import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/movie/";

function App() {
  const [popMovies, setPopMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (endpoint, setter) => {
      try {
        const response = await axios.get(baseURL + endpoint, {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
          },
        });

        setter(response.data.results);
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
      }
    };

    fetchMovies("popular", setPopMovies);
    fetchMovies("top_rated", setTopRatedMovies);
  }, []);

  return (
  <div className="min-h-screen bg-gray-900">
    <Header />
    <Hero movie={popMovies[0]} />

    <MovieList
      id="top-rated"
      title="Top Rated"
      movies={topRatedMovies.slice(0, 5)}
      showRank
    />

    <MovieList
      id="popular"
      title="Popular"
      movies={popMovies}
    />
  </div>
);
}

export default App;
