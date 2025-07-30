"use client";
const Login = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      {/* <!-- From Uiverse.io by howaboutsalman -->  */}
      <div className="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-gray-50" htmlFor="email">
              {" "}
              Email{" "}
            </label>
            <input
              placeholder="Your Email"
              className="w-full p-2 border-b-2 border-primary-400 bg-transparent outline-none focus:border-b-2 focus:border-primary-600"
              name="email"
              id="email"
              type="email"
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
            />
          </div>

          <div className="mb-4">
            <button
              className="w-full bg-primary-600 text-white font-semibold p-2 rounded transition-all hover:bg-primary-400"
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

export default Login;
