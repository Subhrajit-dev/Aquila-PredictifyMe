import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function SignUp({ setUser }) {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSignUp(e) {
    e.preventDefault();
    setUser({ name: email.split("@")[0] });
    nav("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 rounded-2xl 
                   bg-white/30 dark:bg-slate-800/40 
                   backdrop-blur-xl shadow-xl"
      >
        <h1 className="text-3xl font-semibold text-center text-slate-900 dark:text-white">
          Create Account
        </h1>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-6">
          Start your PredictifyMe journey
        </p>

        <button className="w-full flex items-center justify-center gap-3 py-2 
                           border border-slate-300 dark:border-slate-700 
                           rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition">
          <FcGoogle size={24} />
          <span className="text-slate-700 dark:text-slate-200">Sign up with Google</span>
        </button>

        <div className="my-6 flex items-center gap-2">
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700" />
          <span className="text-sm text-slate-500 dark:text-slate-400">or</span>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700" />
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">

          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 rounded-lg 
                         bg-white/50 dark:bg-slate-700/50 
                         border border-slate-300 dark:border-slate-700 
                         text-slate-800 dark:text-slate-200"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 rounded-lg 
                         bg-white/50 dark:bg-slate-700/50 
                         border border-slate-300 dark:border-slate-700 
                         text-slate-800 dark:text-slate-200"
              onChange={e => setPass(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-teal-600 hover:bg-teal-700 
                       text-white rounded-lg transition">
            Create Account
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-slate-600 dark:text-slate-300">
          Already have an account?{" "}
          <Link to="/signin" className="text-teal-600 dark:text-teal-300 hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
