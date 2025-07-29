import DashboardBlogCard from "../blog/DashboardBlogCard";

const DashboardCard = () => {
  
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-5">
      <DashboardBlogCard/>
    </div>
  );
};

export default DashboardCard;
