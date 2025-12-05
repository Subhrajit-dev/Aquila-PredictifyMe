import React from "react";
import { SignIn } from "@clerk/clerk-react";
import HolographicRibbon from "../components/HolographicRibbon";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <HolographicRibbon position="top-left" />
      <HolographicRibbon position="bottom-right" />

      <div className="relative z-10">
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#9333ea",
              colorBackground: "#000000",
              colorText: "#ffffff",
              colorTextSecondary: "#9ca3af",
              colorInputBackground: "rgba(255, 255, 255, 0.05)",
              colorInputText: "#ffffff",
              borderRadius: "0.75rem",
              colorDanger: "#ef4444"
            },
            elements: {
              rootBox: "backdrop-blur-xl",
              card: "bg-black/40 border border-white/10 shadow-2xl",
              headerTitle: "text-white font-bold",
              headerSubtitle: "text-gray-400",
              formButtonPrimary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-none shadow-lg",
              formFieldInput: "bg-white/5 border-white/10 text-white placeholder:text-gray-500",
              formFieldLabel: "text-gray-300",
              footerActionLink: "text-purple-400 hover:text-purple-300",
              identityPreviewText: "text-white",
              formFieldInputShowPasswordButton: "text-gray-400 hover:text-white",
              dividerLine: "bg-white/10",
              dividerText: "text-gray-400",
              socialButtonsBlockButton: "bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-white/30 transition-all",
              socialButtonsBlockButtonText: "text-white font-medium",
              socialButtonsIconButton: "bg-white/10 border border-white/20 text-white hover:bg-white/15",
              footerActionText: "text-gray-400",
              formButtonReset: "text-purple-400 hover:text-purple-300"
            }
          }}
          signUpUrl="/signup"
          forceRedirectUrl="/pricing"
        />
      </div>
    </div>
  );
}
