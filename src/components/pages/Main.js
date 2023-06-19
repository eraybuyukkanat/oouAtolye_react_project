import HomePage from "./Home/HomePage";
import { Route, Routes } from "react-router-dom";
const Main = () => {
  return (
    //navbarı buraya alcam
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a" element={<HomePage />} />
        <Route path="/b" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default Main;
