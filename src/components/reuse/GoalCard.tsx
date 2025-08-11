const GoalCard = () => {
  const data = [
    {
      consumers: "32K",
      title: "Add New Consumers Last Year",
      description:
        "Creating visually stunning and user-friendly websites that drive engagement.",
    },
    {
      consumers: "42K",
      title: "new consumers last year",
      description:
        "Building innovative solutions that empower businesses to thrive in the digital age.",
    },
    {
      consumers: "55K",
      title: "Increase in User Engagement",
      description:
        "Enhancing user experience through intuitive design and seamless functionality.",
    },
  ];
  return (
    <section className="flex  gap-x-4">
      {data.map((Item, index) => {
        return (
          <div
            key={index}
            className="w-full max-w-[430px] h-[350px] p-9 rounded-[40px] bg-[lightgray] bg-cover bg-no-repeat bg-center backdrop-blur-[10px] bg-blend-overlay space-y-[0.6rem]"
            style={{ backgroundColor: "rgba(0, 50, 40, 0.4)" }}
          >
            <h1
              className="bg-[linear-gradient(225deg,_#E6FAF7_0%,_#00D1AE_90.38%)]
            bg-clip-text
            text-transparent
            leading-[140%]
            w-full
            mx-auto text-[2.5rem] xl:text-[3rem] font-semibold"
            >
              {Item.consumers}
            </h1>
            <h2
              className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text
              text-transparent
              leading-[140%]
              w-full
              text-[1.5rem] xl:text-[1.8rem] font-semibold"
            >
              {Item.title}
            </h2>
            <p
              className="bg-[linear-gradient(45deg,_#FFF_25%,_#707070_100%)] bg-clip-text
              text-transparent
              leading-[140%]
              w-full
              text-[0.8rem] xl:text-[1rem] font-semibold"
            >
              {Item.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default GoalCard;
