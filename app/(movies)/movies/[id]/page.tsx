import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

// 동적인 metadata를 받아오는 프레임워크 함수 export를 해야 프레임워크가 찾아서 작동한다다
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      {/* 로딩상태 분리 */}
      {/* Suspense component 에는 fallback 이라는 prop이 있고  */}
      {/* component가 await 되는 동안 표시할 메세지를 render할 수 있게 한다 */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
