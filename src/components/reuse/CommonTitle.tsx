const CommonTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent leading-[140%] text-[28px] sm:text-[35px] lg:text-[50px] font-semibold max-w-[450px] mx-auto text-center">
      {text}
    </h1>
  );
};

export default CommonTitle;
