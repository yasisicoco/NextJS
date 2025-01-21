import { API_URL } from "../lib/constants";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 relative">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
            <img
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
              src={movie.poster_path}
              alt={movie.title}
              width="600"
              height="900"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <span className="text-2xl font-semibold text-yellow-500">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
            <span className="text-2xl font-semibold">/ 10</span>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {movie.overview}
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-700"
            >
              홈페이지 방문 &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
