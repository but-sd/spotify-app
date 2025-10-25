import { useLoaderData } from "react-router";

const TopTracks = () => {
    // change the title of the page
    document.title = "Top Tracks | Spotify App";

    // Get the list of tracks from the API
    const { tracks } = useLoaderData();

    return (
        <>
            <h2>Top Tracks</h2>
                Here are your top tracks:
                <ul id="tracks" data-testid="tracks-list">
                    {tracks.map((track) => (
                        <li key={track.id}>{track.name}</li>
                    ))}
                </ul>
            
        </>
    );
};

export default TopTracks;

