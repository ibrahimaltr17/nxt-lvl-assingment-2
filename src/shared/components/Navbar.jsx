import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              Movie<span className="text-red-500">Explorer</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Movies
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/movies"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-red-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Movies
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;