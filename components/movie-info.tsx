import { API_URL } from "../lib/constants";

export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className="flex flex-col py-10 px-3 md:px-14">
      <div className="grid">
        <div className="relative flex flex-col xl:justify-between xl:flex-row justify-center items-center xl:items-start">
          <div className="relative rounded-xl border border-[#757575] overflow-hidden transition-all">
            <div
              className="absolute w-full h-full blur-0"
              style={{
                backgroundImage: `linear-gradient(to top, black 0%, transparent 28%),
                    linear-gradient(to bottom, transparent, black 0%, transparent 28%), 
                    linear-gradient(to left, transparent, black 0%, transparent 28%), 
                    linear-gradient(to right, transparent, black 0%, transparent 28%)`,
              }}
            ></div>
            <img
              className="rounded-xl duration-700 ease-in-out w-auto h-auto transition-all"
              src={movie.poster_path}
              alt={movie.title}
              fetchPriority="high"
              width="600"
              height="100"
              decoding="async"
              data-nimg="1"
            />
          </div>
          <div className="p-8 w-full md:w-[680px] xl:w-1/2">
            <div className="flex flex-col justify-center items-center gap-4 p-2 xl:justify-between xl:flex-col 2xl:flex-col 2xl:items-end">
              <h1 className="font-semibold text-4xl">{movie.title}</h1>
              <h3 className="">⭐{movie.vote_average.toFixed(1)}</h3>
              <p>{movie.overview}</p>
              <a href={movie.homepage} target={"_blank"}>
                Homepage &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
