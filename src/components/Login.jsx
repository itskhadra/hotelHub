
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function loginUser(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setMessage("Login successful!");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }

  return (
    <div className="bg-white p-5">
      <h2 className="text-2xl text-center mb-4">
        Welcome Back
      </h2>

      <form onSubmit={loginUser}>
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />

        <button
          type="submit"
          className="bg-[#B99A5B] text-white p-3 w-full"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-center">{message}</p>
    </div>
  );
}

export default Login;
