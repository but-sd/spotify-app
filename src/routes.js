import Layout from './Layout';
import AboutPage from './pages/AboutPage';

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
        Component: AboutPage
      }
    ],
  },
]

export default routes;