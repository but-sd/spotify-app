/**
 * Generic function to call Spotify Web API endpoints
 */
export async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}