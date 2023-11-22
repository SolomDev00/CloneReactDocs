import Navbar from "../../components/Navbar";
import LearnAside from "../../components/LearnAside";
import { Outlet } from "react-router-dom";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <LearnAside />
      <Outlet />
    </>
  );
};

export default LearnLayout;
