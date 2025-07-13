const CommonTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)] bg-clip-text text-transparent leading-[140%]  mx-auto text-[clamp(2rem,10vw,3rem)] font-semibold  text-center">
      {text}
    </h1>
  );
};

export default CommonTitle;
