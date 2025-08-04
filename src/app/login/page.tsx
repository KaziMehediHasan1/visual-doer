"use client";
import uploadFormData from "@/hooks/uploadFormData";
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    setLoader(true);
    console.log(email, password, "check mail and password");
  };

  const handleForgotPassword = async () => {
    const email = process.env.NEXT_PUBLIC_ADMIN_MAIL;
    if (email) {
      try {
        setLoader(true);
        const res = await uploadFormData({
          data: email,
          url: "/forgot-password/api",
          setLoader,
        });
        
        console.log(loader, "just check loader and data", res);
      } catch (error) {
        console.log(error, "check error");
      }
    }
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
            <button
              onClick={handleForgotPassword}
              className="text-sm hover:border-b-[1px] cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
