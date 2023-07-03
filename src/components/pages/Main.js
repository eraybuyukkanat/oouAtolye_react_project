import { Outlet} from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
const Main = () => {
  return (
    //navbarı buraya alcam
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
