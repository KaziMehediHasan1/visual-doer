const CommonTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent leading-[140%] text-[1.5rem] sm:text-[2.2rem] lg:text-[3.2rem] font-semibold max-w-1/2 mx-auto text-center">
      {text}
    </h1>
  );
};

export default CommonTitle;
