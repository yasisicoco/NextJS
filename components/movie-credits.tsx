import { API_URL } from "../lib/constants";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {credits.map((credit) => (
          <div key={credit.id} className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2 overflow-hidden rounded-full relative group">
              {credit.profile_path ? (
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w185${credit.profile_path}`}
                    alt={credit.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-center">
                      ⭐{credit.popularity.toFixed(1)}
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-xs sm:text-sm">
                    No Image
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-center">
              {credit.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">
              {credit.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
