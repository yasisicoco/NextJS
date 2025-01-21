"use client";

import { useState } from "react";

export default function MoreVideos({ videos }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-neutral-950 hover:opacity-30 text-white font-bold py-2 px-4 rounded border"
        >
          More Videos
        </button>
      </div>
      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
                className="w-full h-full rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
