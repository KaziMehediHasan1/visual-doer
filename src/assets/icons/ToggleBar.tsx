const ToggleBar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="24"
      viewBox="0 0 34 24"
      fill="none"
      className="lg:hidden block w-6 h-5 sm:h-9 sm:w-9"
    >
      <path
        d="M2 12H32M2 2H32M2 22H22"
        stroke="url(#paint0_linear_2190_420)"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2190_420"
          x1="32"
          y1="2"
          x2="13.5385"
          y2="29.6923"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6FAF7" />
          <stop offset="0.903846" stopColor="#00D1AE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ToggleBar;
