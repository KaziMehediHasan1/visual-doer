"use client";
import uploadFormData from "@/hooks/uploadFormData";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const ResetPassword = ({ token }: { token?: string }) => {
  console.log(token, "token ashuk");
  const redirect = useRouter();
  const [loader, setLoader] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newPassword = form.newPassword.value;
    const ConfirmPassword = form.ConfirmPassword.value;

    if (newPassword && ConfirmPassword) {
      const res = (await uploadFormData({
        data: { newPassword, token },
        url: "/reset-password/api",
        setLoader,
      })) as { success: boolean; status: number };

      if (res.success && res.status == 200) {
        redirect.push("/login");
      }
    }

    console.log(
      newPassword,
      ConfirmPassword,
      loader,
      "checking password reset"
    );
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-50">New Password</label>
            <input
              name="newPassword"
              type="password"
              className="w-full p-2 border-b-2 border-primary-400 bg-transparent outline-none focus:border-primary-600"
              placeholder="New Password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-50">Confirm Password</label>
            <input
              name="ConfirmPassword"
              type="password"
              className="w-full p-2 border-b-2 border-primary-400 bg-transparent outline-none focus:border-primary-600"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-primary-600 text-white font-semibold p-2 rounded hover:bg-primary-400"
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
