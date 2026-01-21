export interface LastFmTrack {
  name: string;
  artist: {
    name: string;
  };
  album: {
    name: string;
  };
  image: Array<{
    size: string;
    "#text": string;
  }>;
  url: string;
  "@attr"?: {
    nowplaying: string;
  };
}

export interface LastFmResponse {
  recenttracks: {
    track: LastFmTrack[];
    "@attr": {
      user: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const fetchLastFmTrack = async (): Promise<LastFmTrack | null> => {
  try {
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
    const username = import.meta.env.VITE_LASTFM_USERNAME;

    if (!apiKey || !username) {
      console.warn("Last.fm API key or username not configured");
      return null;
    }

    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&limit=1&format=json`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Last.fm data");
    }

    const data: LastFmResponse = await response.json();
    const track = data.recenttracks.track[0];

    return track || null;
  } catch (error) {
    console.error("Error fetching Last.fm track:", error);
    return null;
  }
};
