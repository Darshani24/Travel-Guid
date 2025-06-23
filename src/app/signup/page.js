"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus("");

    if (password !== confirmPassword) {
      setStatus("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("/api/signup", { name, email, password });
      setStatus(res.data.message || "Signup successful!");
      if (res.status === 200) {
        
        setTimeout(() => router.push("/login"), 1500);
      }
    } catch (error) {
      setStatus(error.response?.data?.error || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-10">
      <div className="max-w-md w-full p-8 bg-neutral-300/20 hover:bg-neutral-300/35 backdrop-blur-sm rounded-xl shadow-xl border border-green-900/30">
        <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full hover:bg-green-50/25 bg-neutral-400/20 border border-green-900/30 backdrop-blur-sm text-neutral-700/30 hover:text-gray-700 py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-red-600">
            {status}
          </p>
        )}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-green-700 font-bold"
          >
            Login
          </button>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
