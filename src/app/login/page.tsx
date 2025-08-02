"use client";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, "check mail and password");
  };
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      {/* <!-- From Uiverse.io by howaboutsalman -->  */}
      <div className="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-50" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Your Email"
              className="w-full p-2 border-b-2 border-primary-400 bg-transparent outline-none focus:border-b-2 focus:border-primary-600"
              name="email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-50" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Your Password"
              className="w-full p-2 border-b-2 border-primary-400 bg-transparent outline-none focus:border-b-2 focus:border-primary-600"
              type="password"
              name="password"
            />
          </div>

          <div className="mb-4 space-y-3">
            <button
              className="w-full bg-primary-600 text-white font-semibold p-2 rounded transition-all hover:bg-primary-400 cursor-pointer"
              type="submit"
            >
              Login
            </button>
            <Link
              href="/forgot-password"
              className="text-sm hover:border-b-[1px]"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
