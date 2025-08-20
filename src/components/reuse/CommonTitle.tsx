const CommonTitle = ({ text, style }: { text: string; style?: string }) => {
  return (
    <h1
      className={`bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)]
             bg-clip-text
             text-transparent
             leading-[3rem]
             sm:leading-[4rem]
             xl:leading-[5rem]
             w-full
             mx-auto
             text-[2rem]
             sm:text-[3rem]
             xl:text-[4rem]
             font-semibold
             text-center ${style}`}
    >
      {text}
    </h1>
  );
};

export default CommonTitle;
