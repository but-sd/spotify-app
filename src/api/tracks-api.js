import { fetchWebApi } from "./api-utils";

/**
 * Fetch the current user's top tracks from the Spotify Web API
 * @returns {Promise<Array>} A promise that resolves to an array of top tracks
 */

/**
 * Fetch the current user's top tracks from the Spotify Web API
 * @param {Object} params - Query parameters as key-value pairs (e.g., { time_range: 'short_term', limit: 10 })
 * @returns {Promise<Array>} A promise that resolves to an array of top tracks
 */
export async function getTopTracks(params = {}) {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  const defaultParams = { time_range: 'long_term', limit: 25 };
  const query = new URLSearchParams({ ...defaultParams, ...params }).toString();
  return (
    await fetchWebApi(`v1/me/top/tracks?${query}`, "GET")
  ).items;
}
