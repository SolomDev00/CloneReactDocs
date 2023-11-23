import LearnAside from "../../components/LearnAside";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <LearnAside />

      <div className="ml-72">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
