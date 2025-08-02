"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const ResetPassword = () => {
  const redirect = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.newPassword.value;
    const password = form.ConfirmPassword.value;
    if (email && password) {
      redirect.push("/login");
    }
    console.log(email, password, "check mail and password");
  };
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      {/* <!-- From Uiverse.io by howaboutsalman -->  */}
      <div className="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-50" htmlFor="email">
              New Password
            </label>
            <input
              placeholder="New Password"
              className="w-full p-2 border-b-2 border-primary-400 bg-transparent outline-none focus:border-b-2 focus:border-primary-600"
              name="newPassword"
              type="password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-50" htmlFor="password">
              Confirm Password
            </label>
            <input
              placeholder="Confirm Password"
              className="w-full p-2 border-b-2 border-primary-400 bg-transparent outline-none focus:border-b-2 focus:border-primary-600"
              type="password"
              name="ConfirmPassword"
            />
          </div>

          <div className="mb-4 space-y-3">
            <button
              className="w-full bg-primary-600 text-white font-semibold p-2 rounded transition-all hover:bg-primary-400 cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
