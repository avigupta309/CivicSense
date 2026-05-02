import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ReportList } from "./pages/Report/ReportList";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthUser } from "../src/hook/Auth";
import { ToastContainer } from "react-toastify";
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
        <Route
          path="/reports"
          element={isAuthenticated ? <ReportList /> : <LoginPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};
