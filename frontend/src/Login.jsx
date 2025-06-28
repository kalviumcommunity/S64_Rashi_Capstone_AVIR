import React, { useState } from "react";
import familyIllustration from "./assets/loginFamily.png";
import Navbar from "./components/navbar";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill all fields!");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setError("");
        // Optionally redirect or clear form here
      } else {
        setError(data.message || "Login failed!");
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setError("Network error!");
      setSuccess(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#fff7f0]">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl">
          {/* Left Side */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-2 animate-bounce text-[#2d1d0b] font-[cursive]">
              Welcome Back!
            </h1>
            <p className="text-lg mb-6 font-[cursive] text-[#2d1d0b]">
              Sign in to continue your journey
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#f7b267] transition-all duration-200 ${
                  error && !form.email
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#f7b267] transition-all duration-200 ${
                  error && !form.password
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-fit px-6 py-2 bg-[#f7b267] text-white rounded-full font-semibold shadow-md hover:bg-[#f4845f] transition-all duration-200 active:scale-95"
              >
                Sign In
              </button>
              {error && (
                <div className="text-red-500 text-sm animate-pulse">{error}</div>
              )}
              {success && (
                <div className="text-green-600 text-sm animate-bounce">
                  Login successful!
                </div>
              )}
            </form>
            <div className="mt-4 text-gray-600 text-sm">
              New here?{" "}
              <a href="/signup" className="underline text-[#f4845f]">
                Create an account
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 flex items-center justify-center bg-[#fff0e6] relative">
            <img
              src={familyIllustration}
              alt="Family Illustration"
              className="w-80 h-80 object-contain animate-float"
            />
            {/* Decorative floating stars */}
            <div className="absolute top-10 left-10 w-6 h-6 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-4 h-4 bg-yellow-200 rounded-full opacity-60 animate-ping"></div>
          </div>
        </div>
      </div>
    </>
  );
}