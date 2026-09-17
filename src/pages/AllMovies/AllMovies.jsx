import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./AllMovieComponents/MovieCard";
import MovieModal from "./AllMovieComponents/MovieModal";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setLoading(true);
      fetch("https://api.tvmaze.com/shows")
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .finally(() => setLoading(false));
      return;
    }

    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.map((item) => item.show)))
      .finally(() => setLoading(false));
  };

  const handleSeeDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold sm:text-4xl">Explore Movies</h1>
          <p className="mx-auto mb-6 max-w-xl text-sm text-gray-400 sm:text-base">Discover movies and find something worth watching.</p>
          <div className="relative mx-auto max-w-2xl">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="text" value={search} onChange={handleSearch} placeholder="Search for a movie..." className="w-full rounded-lg border border-white/10 bg-[#171717] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-red-500" />
          </div>
        </div>

        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
          </div>
        ) : movies.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold">No movies found</h2>
            <p className="mt-2 text-sm text-gray-500">Try searching with a different title.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onSeeDetails={handleSeeDetails} />
            ))}
          </div>
        )}

        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      </div>
    </main>
  );
};

export default AllMovies;
