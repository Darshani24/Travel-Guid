"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await axios.post("/api/login", { email, password });
      setStatus(res.data.message);
      if (res.status === 200) {
     
        setTimeout(() => router.push("/"), 1000);
      }
    } catch (error) {
      setStatus(error.response?.data?.error || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-10">
      <div className="max-w-md w-full p-8 bg-neutral-300/20 hover:bg-neutral-300/35 backdrop-blur-sm rounded-xl shadow-xl border border-green-900/30">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full hover:bg-green-50/25 bg-neutral-400/20 border border-green-900/30 backdrop-blur-sm text-neutral-700/30 hover:text-gray-700 py-3 transition disabled:opacity-50 rounded-xl shadow-2xl"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-red-600">
            {status}
          </p>
        )}
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="text-green-700 font-bold "
          >
            Signup
          </button>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
