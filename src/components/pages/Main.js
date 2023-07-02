import HomePage from "./Home/HomePage";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "./Courses/CoursesPage";
import ContactPage from "./Contact/ContactPage";
import PodcastsPage from "./Podcasts/PodcastsPage";
const Main = () => {
  return (
    //navbarı buraya alcam
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Main;
