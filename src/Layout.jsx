import { NavLink, Outlet } from "react-router";
import { version } from '../package.json';

const Layout = () => {
    return (
        <>
            <header>
                <h1>Spotify App</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Spotify App - { version } </p>
            </footer>
        </>
    );
};

export default Layout;