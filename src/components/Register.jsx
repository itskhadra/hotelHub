
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function registerUser(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: fullName
        });
      })
      .then(() => {
        setMessage("Account created successfully!");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }

  return (
    <div className="bg-[#F8F6F1] py-12 px-5">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">

        <h2 className="text-3xl font-semibold text-center text-[#17243A] mb-3">
          Create Your Account
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Join HotelHub and enjoy a convenient booking experience.
        </p>

        <form onSubmit={registerUser} className="space-y-5">

          <div>
            <label className="block text-[#17243A] mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-[#17243A] mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-[#17243A] mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B99A5B] text-white py-3 rounded-md hover:bg-[#967A43] transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? Sign In
        </p>

        <p className="text-center text-sm mt-4 text-[#17243A]">
          {message}
        </p>

      </div>
    </div>
  );
}

export default Register;
