import { Suspense } from "react";
import { API_URL } from "../lib/constants";
import MoreVideos from "./movie-moreVideos";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  const recentVideos = videos.slice(0, 3);
  const remainingVideos = videos.slice(3);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Another Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentVideos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
      {remainingVideos.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <MoreVideos videos={remainingVideos} />
        </Suspense>
      )}
    </div>
  );
}

function VideoItem({ video }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://youtube.com/embed/${video.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.name}
        className="w-full h-full rounded-lg shadow-lg"
      />
    </div>
  );
}
