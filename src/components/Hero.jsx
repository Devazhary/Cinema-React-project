const BACKDROP_URL = "https://image.tmdb.org/t/p/original";

function Hero({ movie }) {
  if (!movie) return null;

  return (
    <section
      className="relative h-screen min-h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})` }}
    >
      
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.5) 50%, transparent 100%)",
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #111827 0%, transparent 40%)",
        }}
      />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center gap-5">
        <span className="w-fit px-3 py-1 text-xs font-semibold tracking-wider text-white bg-red-600 rounded">
          TRENDING NOW
        </span>

        <h2 className="max-w-2xl text-5xl md:text-6xl font-extrabold text-white leading-tight">
          {movie.title}
        </h2>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span className="text-yellow-400 font-semibold">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
          <span>{movie.release_date?.slice(0, 4)}</span>
          <span>{movie.vote_count} votes</span>
        </div>

        <p className="max-w-xl text-gray-300 line-clamp-3">{movie.overview}</p>

        <div className="flex gap-3 mt-2">
          <button className="px-6 py-3 font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition-colors">
            ▶ Watch Trailer
          </button>
          <button className="px-6 py-3 font-semibold text-white bg-white/20 rounded backdrop-blur hover:bg-white/30 transition-colors">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
