import { getTopTracks } from './api/tracks-api';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import TopTracks from './pages/TopTracks';

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    // HydrateFallback: Loading,
    children: [
      {
        path: "/",
        index: true,
        Component: TopTracks
      },
      {
        path: "top-tracks",
        Component: TopTracks,
        loader: async () => {
          const tracks = await getTopTracks({ limit: 10 });
          return { tracks };
        },
      },
      {
        path: "about",
        Component: AboutPage
      }
    ],
  },
]

export default routes;