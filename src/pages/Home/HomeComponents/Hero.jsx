import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Welcome to Movie Explorer
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover Your Next
            <span className="block text-red-500">Favorite Movie</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore movies and shows from around the world. Find something
            exciting to watch and discover your next favorite story.
          </p>
          <div className="mt-8">
            <Link
              to="/all-movies"
              className="inline-flex items-center rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Explore Movies
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;