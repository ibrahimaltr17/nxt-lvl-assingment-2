import { FaCalendarAlt, FaClock, FaLanguage, FaStar, FaTimes } from "react-icons/fa";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-red-500/20 bg-[#111111] shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-gray-300 transition hover:bg-red-600 hover:text-white">
          <FaTimes />
        </button>

        <div className="h-64 w-full overflow-hidden sm:h-80">
          <img src={movie.image?.original || movie.image?.medium} alt={movie.name} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-5 p-5 sm:p-7">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{movie.name}</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span key={genre} className="rounded-full bg-red-600/10 px-3 py-1 text-xs text-red-400">
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <div className="rounded-lg bg-[#1a1a1a] p-3">
              <FaStar className="mb-2 text-yellow-400" />
              <p className="text-gray-500">Rating</p>
              <p className="font-semibold text-white">{movie.rating?.average || "N/A"}</p>
            </div>

            <div className="rounded-lg bg-[#1a1a1a] p-3">
              <FaCalendarAlt className="mb-2 text-red-500" />
              <p className="text-gray-500">Premiered</p>
              <p className="font-semibold text-white">{movie.premiered || "N/A"}</p>
            </div>

            <div className="rounded-lg bg-[#1a1a1a] p-3">
              <FaClock className="mb-2 text-red-500" />
              <p className="text-gray-500">Runtime</p>
              <p className="font-semibold text-white">{movie.runtime ? `${movie.runtime} min` : "N/A"}</p>
            </div>

            <div className="rounded-lg bg-[#1a1a1a] p-3">
              <FaLanguage className="mb-2 text-red-500" />
              <p className="text-gray-500">Language</p>
              <p className="font-semibold text-white">{movie.language || "N/A"}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">Overview</h3>
            <div className="text-sm leading-7 text-gray-400">
              {movie.summary ? (
                <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
              ) : (
                "No overview available."
              )}
            </div>
          </div>

          <div className="flex justify-end border-t border-white/10 pt-5">
            <button onClick={onClose} className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

