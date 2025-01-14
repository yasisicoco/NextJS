import styles from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={movie.poster_path}
          alt={movie.title}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3>⭐{movie.vote_average.toFixed(1)}</h3>
          <p>{movie.overview}</p>
          <a href={movie.homepage} target={"_blank"}>
            Homepage &rarr;
          </a>
        </div>
      </div>
      <div className={styles.companyContainer}>
        <div className={styles.company}>
          {movie.production_companies.map((company) => (
            <div key={company.id} className={styles.companyProduct}>
              <div>{company.name}</div>
              <img src={company.logo_path} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
