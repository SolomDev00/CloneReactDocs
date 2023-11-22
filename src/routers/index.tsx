import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import AboutPage from "../views/About";
import ContactPage from "../views/Contact";
import RootLayout from "../views/Layout";
import QuickStartPage from "../views/learn";
import LearnLayout from "../views/learn/Layout";
import ThinkingInReactPage from "../views/learn/ThinkingInReact";
import InstallationPage from "../views/learn/Installation";
import ContributePage from "../views/Contribute";
import LoginPage from "../views/Auth/Login";

const isLoggedIn = false;

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="login"
          element={
            !isLoggedIn ? <LoginPage /> : <Navigate to={"/contribute"} />
          }
        />
        <Route
          path="contribute"
          element={isLoggedIn ? <ContributePage /> : <Navigate to={"/login"} />}
        />
      </Route>
      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="installation" element={<InstallationPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
      </Route>
    </>
  )
);

export default routers;
