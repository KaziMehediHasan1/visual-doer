const CommonTitle = ({ text, style }: { text: string; style?: string }) => {
  return (
    <h1
      className={`
            bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)]
            bg-clip-text
            text-transparent
            mx-auto
            w-full 
            px-4 
            text-[32px] leading-[48px]    
            sm:text-[48px] sm:leading-[67px] 
            xl:text-[64px] xl:leading-[83px]
            font-semibold
            text-center ${style}`}
    >
      {text}
    </h1>
  );
};

export default CommonTitle;
