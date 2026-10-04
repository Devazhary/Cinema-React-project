const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, rank }) {
  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:z-10">
      {rank && (
        <span className="absolute top-2 left-2 z-10 w-8 h-8 flex items-center justify-center text-sm font-bold text-white bg-red-600 rounded-full">
          {rank}
        </span>
      )}

      {movie.poster_path ? (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
          className="w-full aspect-[2/3] object-cover"
        />
      ) : (
        <div className="aspect-[2/3] flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}

      <div className="p-3">
        <h3 className="text-white font-semibold truncate">{movie.title}</h3>
        <div className="flex justify-between items-center text-sm mt-1">
          <span className="text-yellow-400">⭐ {movie.vote_average.toFixed(1)}</span>
          <span className="text-gray-400">{movie.release_date?.slice(0, 4)}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;