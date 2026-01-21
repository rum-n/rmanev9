import { useEffect, useState } from "react";
import { fetchLastFmTrack, LastFmTrack } from "../../utils/lastfm";

export const NowPlaying = () => {
  const [track, setTrack] = useState<LastFmTrack | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrack = async () => {
      setLoading(true);
      const lastFmTrack = await fetchLastFmTrack();
      setTrack(lastFmTrack);
      setLoading(false);
    };

    loadTrack();

    // Refresh every 30 seconds
    const interval = setInterval(loadTrack, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="p-lg border border-surface-hover rounded-lg bg-white animate-pulse">
        <div className="h-4 bg-surface-hover rounded w-24 mb-2"></div>
        <div className="h-3 bg-surface-hover rounded w-32"></div>
      </div>
    );
  }

  if (!track) {
    return null;
  }

  const isNowPlaying = track["@attr"]?.nowplaying === "true";
  const imageUrl =
    track.image.find((img) => img.size === "medium")?.["#text"] || "";

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-lg p-lg border border-surface-hover rounded-lg hover:border-primary transition-all duration-normal bg-white hover:bg-surface-hover"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={track.name}
          className="w-16 h-16 rounded object-cover flex-shrink-0"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-sm mb-sm">
          <p className="text-xs font-medium text-tertiary">
            {isNowPlaying ? "Now Playing" : "Last Played"}
          </p>
          {isNowPlaying && (
            <div className="flex gap-0.5">
              <div
                className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          )}
        </div>
        <h3 className="text-sm font-bold text-primary truncate">
          {track.name}
        </h3>
        <p className="text-xs text-secondary truncate">{track.artist.name}</p>
        {track.album.name && (
          <p className="text-xs text-tertiary truncate">{track.album.name}</p>
        )}
      </div>
    </a>
  );
};
