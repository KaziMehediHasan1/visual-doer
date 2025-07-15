const CommonTitle = ({ text, style }: { text: string; style?: string }) => {
  return (
    <h1
      className={`bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)]
             bg-clip-text
             text-transparent
             leading-[140%]
             w-full
             mx-auto
             text-[clamp(1.5rem,6vw,3rem)]
             font-semibold
             text-center ${style}`}
    >
      {text}
    </h1>
  );
};

export default CommonTitle;
