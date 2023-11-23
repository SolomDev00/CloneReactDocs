import {
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
import ProtectedRoute from "../views/Auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../views/PageNotFound";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@gmail.com" }
  : null;

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute
              isAllowed={isLoggedIn}
              redircetPath="/login"
              data={userData}
            >
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redircetPath="/contribute"
              data={userData}
            >
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default routers;
