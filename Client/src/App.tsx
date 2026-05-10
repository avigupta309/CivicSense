import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ReportList } from "./pages/Report/ReportList";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthUser } from "../src/hook/Auth";
import { ToastContainer } from "react-toastify";
import { UserProfile } from "./User/main";
import { Home } from "./pages/Home";
import { Setting } from "./pages/Setting";
import { AboutPage } from "./pages/AboutPage/Main";
export const App = () => {
  const isAuthenticated = AuthUser();
  return (
    <>
      <ToastContainer draggable />
      <div className="">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutPage/>} />
        <Route
          path="/reports"
          element={isAuthenticated ? <ReportList /> : <LoginPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/profile"
          element={isAuthenticated ? <UserProfile /> : <LoginPage />}
        />
        <Route path="/settingpage" element={<Setting />} />
      </Routes>
    </>
  );
};
