import HomePage from "./Home/HomePage";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "./Courses/CoursesPage";
import ContactPage from "./Contact/ContactPage";
import Navbar from "../layout/Navbar/Navbar";
const Main = () => {
  return (
    //navbarı buraya alcam
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Main;
