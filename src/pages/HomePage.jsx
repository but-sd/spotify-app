import { Navigate } from "react-router";

const HomePage = () => {
    // change the title of the page
    document.title = "Home | Spotify App";

    return (
        <>
            { /* Redirect to /top-tracks page */ }
            <Navigate to="/top-tracks" replace={true} />
        </>
    );
};

export default HomePage;