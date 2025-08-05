"use client";

import DashboardCard from "components/dashboard/DashboardCard";

const Dashboard = () => {
  return (
    <div className="w-full text-white px-4 py-3">
      <section className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6 w-full">
        <DashboardCard
          title="Blog Stats"
          endpoint="/dashboard/blog/api"
          render={(data) => (
            <>
              <p className="text-sm">Total upload blogs</p>
              <div className="flex items-center justify-between">
                <p>Total: {data?.total}</p>
                <h1>{data?.length}</h1>
              </div>
            </>
          )}
        />
        <DashboardCard
          title="Projects Stats"
          endpoint="/dashboard/projects/api"
          render={(data) => (
            <>
              <p className="text-sm">Total completed projects</p>
              <div className="flex items-center justify-between">
                <p>Total: {data?.total}</p>
                <h1>{data?.length}</h1>
              </div>
            </>
          )}
        />
        <DashboardCard
          title="Clients Reviews"
          endpoint="/dashboard/review/api"
          render={(data) => (
            <>
              <p className="text-sm">Total Clients Reviews</p>
              <div className="flex items-center justify-between">
                <p>Total: {data?.total}</p>
                <h1>{data?.length}</h1>
              </div>
            </>
          )}
        />
        <DashboardCard
          title="Team Members"
          endpoint="/dashboard/team/api"
          render={(data) => (
            <>
              <p className="text-sm">Total Team Member</p>
              <div className="flex items-center justify-between">
                <p>Total: {data?.total}</p>
                <h1>{data?.length}</h1>
              </div>
            </>
          )}
        />
        <DashboardCard
          title="Our Services"
          endpoint="/dashboard/skills/api"
          render={(data) => (
            <>
              <p className="text-sm">Total Services</p>
              <div className="flex items-center justify-between">
                <p>Total: {data?.total}</p>
                <h1>{data?.length}</h1>
              </div>
            </>
          )}
        />
        <DashboardCard
          title="Total FAQs"
          endpoint="/dashboard/faq/api"
          render={(data) => (
            <>
              <p className="text-sm">Total FAQs</p>
              <div className="flex items-center justify-between">
                <p>Total: {data?.total}</p>
                <h1>{data?.length}</h1>
              </div>
            </>
          )}
        />
      </section>
    </div>
  );
};

export default Dashboard;
