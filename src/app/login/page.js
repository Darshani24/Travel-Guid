import React from 'react'

const Login
 = () => {
  return (
   <section className="px-6 py-10 flex justify-center items-center min-h-screen bg-white">
      <div className="bg-green-50 shadow-lg rounded-lg p-8 w-full max-w-md min-h-[500px]">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white px-6 py-3 w-full rounded hover:bg-green-800 transition">
            Login
          </button>
        </form>
      </div>
    </section>
  );
 
}

export default Login
