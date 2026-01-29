"use client";

import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useState } from "react";
import { FaApple, FaGoogle, FaTwitter } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <>
      {/* Logo + Header */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
          A
        </div>
      </div>

      <h2 className="text-center text-2xl font-semibold text-gray-900 mb-1">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 mb-8 text-sm">
        Don’t have an account yet?{" "}
        <Link
          href="/register"
          className="text-indigo-600 font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>

      {/* Inputs */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className="space-y-6"
      >
        <div className="relative">
          <input
            type="email"
            required
            className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <svg
            className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M16 12H8m0 0l4-4m-4 4l4 4" />
          </svg>
        </div>

        <div className="relative">
          <input
            type="password"
            required
            className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <svg
            className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
            <path d="M5 12a7 7 0 0114 0v4a3 3 0 01-3 3H8a3 3 0 01-3-3v-4z" />
          </svg>
        </div>

        {error && (
          <p className="text-sm text-red-600 text-center select-none">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* OR separator */}
      <div className="flex items-center my-6">
        <hr className="grow border-gray-300" />
        <span className="mx-3 text-gray-400 font-semibold text-sm">OR</span>
        <hr className="grow border-gray-300" />
      </div>

      {/* Social buttons */}
      <div className="flex justify-between gap-4">
        <button
          type="button"
          aria-label="Login with Apple"
          className="flex items-center justify-center flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
        >
          <FaApple className="text-xl" />
        </button>

        <button
          type="button"
          aria-label="Login with Google"
          className="flex items-center justify-center flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
        >
          <FaGoogle className="text-xl" />
        </button>

        <button
          type="button"
          aria-label="Login with Twitter"
          className="flex items-center justify-center flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
        >
          <FaTwitter className="text-xl" />
        </button>
      </div>
    </>
  );
}
