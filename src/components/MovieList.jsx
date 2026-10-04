import MovieCard from "./MovieCard";

function MovieList({ id, title, movies, showRank = false }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-10 scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-3">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            rank={showRank ? index + 1 : null}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieList;