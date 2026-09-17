import { FaCalendarAlt, FaStar } from "react-icons/fa";

const MovieCard = ({ movie, onSeeDetails }) => {
  const { name, image, premiered, rating } = movie;

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900">
      <div className="h-64 overflow-hidden">
        <img src={image?.medium} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-2 p-3">
        <h2 className="truncate text-base font-semibold text-white">{name}</h2>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1"><FaStar className="text-yellow-400" />{rating?.average || "N/A"}</span>
          <span className="flex items-center gap-1"><FaCalendarAlt />{premiered ? premiered.slice(0, 4) : "N/A"}</span>
        </div>
        <button onClick={() => onSeeDetails(movie)} className="w-full rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-700">See Details</button>
      </div>
    </div>
  );
};

export default MovieCard;

