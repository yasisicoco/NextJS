import Link from "next/link";
import Movie from "../../components/movie";
import { API_URL } from "../../lib/constants";

export const metadata = {
  title: "홈",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">movie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
