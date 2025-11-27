import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SleepPage from "./pages/SleepPage";
import ScreenTimePage from "./pages/ScreenTimePage";
import TypingPage from "./pages/TypingPage";
import StressPage from "./pages/StressPage";


export default function App(){
  // simple client-side auth mock (replace with real auth later)
  const [user, setUser] = useState(null);
  useEffect(() => {
  document.title = "PredictifyMe";
}, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} setUser={setUser} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/screen-time" element={<ScreenTimePage />} />
          <Route path="/typing" element={<TypingPage />} />
          <Route path="/stress" element={<StressPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
