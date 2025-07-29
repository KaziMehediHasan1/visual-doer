const DashboardCard = () => {
  const data = [
    { title: "Title", description: "Description", count: 5 },
    { title: "Title", description: "Description", count: 5 },
    { title: "Title", description: "Description", count: 5 },
    { title: "Title", description: "Description", count: 5 },
    { title: "Title", description: "Description", count: 5 },
    { title: "Title", description: "Description", count: 5 },
    // Add more cards if needed
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-5">
      {data.map((item) => {
        return (
          <div key={item.count} className="flex-1 w-full max-w-[90vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[25vw] p-3 bg-primary-600 rounded-sm shadow-md">
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-sm text-gray-100">{item.description}</p>
            <section className="flex items-center justify-between mt-3">
              <p>Total Blogs -</p>
              <h1 className="font-bold text-xl">0{item.count}</h1>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCard;
