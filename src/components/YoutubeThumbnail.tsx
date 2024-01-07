import React from "react";

export const YoutubeThumbnail: React.FC<{ videoId: string }> = ({
  videoId,
}) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <img
      className="h-auto max-w-full rounded-lg"
      src={thumbnailUrl}
      alt="Youtube Video Thumbnail"
    />
  );
};
