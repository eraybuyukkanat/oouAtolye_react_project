import Main from './components/pages/Main';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/pages/Error';
import Home from './components/pages/Home/HomePage';
import CoursesPage from './components/pages/Courses/CoursesPage';
import PodcastsPage from './components/pages/Podcasts/PodcastsPage';
import ContactPage from './components/pages/Contact/ContactPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/courses", element: <CoursesPage /> },
        { path: "/podcasts", element: <PodcastsPage />},
        { path: "/contact", element: <ContactPage />}
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
