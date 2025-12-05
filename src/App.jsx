import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InstallPrompt from "./components/InstallPrompt";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SleepPage from "./pages/SleepPage";
import ScreenTimePage from "./pages/ScreenTimePage";
import TypingPage from "./pages/TypingPage";
import StressPage from "./pages/StressPage";
import SettingsPage from "./pages/SettingsPage";
import PricingPage from "./pages/PricingPage";


export default function App() {
  useEffect(() => {
    document.title = "PredictifyMe";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/sleep"
            element={
              <>
                <SignedIn>
                  <SleepPage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/screen-time"
            element={
              <>
                <SignedIn>
                  <ScreenTimePage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/typing"
            element={
              <>
                <SignedIn>
                  <TypingPage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/stress"
            element={
              <>
                <SignedIn>
                  <StressPage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <SignedIn>
                  <SettingsPage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </main>
      <Footer />
      <InstallPrompt />
    </div>
  );
}
