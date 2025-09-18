import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignupPage from "./pages/Auth/Signup/SignupPage";
import VerifyEmailPage from "./pages/Auth/Verify_Email/VerifyEmailPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
