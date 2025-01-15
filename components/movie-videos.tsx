import { API_URL } from "../lib/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {/* allow 속성 권한:
      - accelerometer: 모션/방향 감지
      - autoplay: 자동 재생
      - clipboard-write: 클립보드 복사
      - encrypted-media: DRM 보호 콘텐츠
      - gyroscope: 기기 회전 감지
      - picture-in-picture: 영상 팝업 모드
      - allowFullScreen: 풀스크린 허용 */}
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-midia; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
