import React, { useState } from "react";
import familyIllustration from "./assets/signUp.png";
import Navbar from "./components/navbar";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill all fields!");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setError("");
        // Optionally clear form here
      } else {
        setError(data.message || "Signup failed!");
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
              helloo!!
            </h1>
            <p className="text-lg mb-6 font-[cursive] text-[#2d1d0b]">
              let's create a world of love <br /> and bond
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#f7b267] transition-all duration-200 ${
                  error && !form.name
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
                value={form.name}
                onChange={handleChange}
              />
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
                placeholder="Create Password"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#f7b267] transition-all duration-200 ${
                  error && !form.password
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
                value={form.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#f7b267] transition-all duration-200 ${
                  error && !form.confirmPassword
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-fit px-6 py-2 bg-[#f7b267] text-white rounded-full font-semibold shadow-md hover:bg-[#f4845f] transition-all duration-200 active:scale-95"
              >
                Let's get started
              </button>
              {error && (
                <div className="text-red-500 text-sm animate-pulse">{error}</div>
              )}
              {success && (
                <div className="text-green-600 text-sm animate-bounce">
                  Sign up successful!
                </div>
              )}
            </form>
            <div className="mt-4 text-gray-600 text-sm">
              Already registered?{" "}
              <a href="/login" className="underline text-[#f4845f]">
                Sign in
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