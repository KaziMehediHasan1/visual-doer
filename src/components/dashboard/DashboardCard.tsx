import getData from "@/hooks/getData";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  endpoint: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (data: any) => React.ReactNode;
};

type ProjectResponse = {
  success: boolean;
  message: string;
  data: [];
  status: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDataResponse(res: any): res is ProjectResponse {
  return res && Array.isArray(res.data);
}
const DashboardCard = ({ title, endpoint, render }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData({ url: endpoint, setLoader: setLoading });
        if (isDataResponse(res)) setData(res.data);
      } catch (err) {
        console.error(`Error loading ${title}`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);
  // console.log(data, "dataaaaaaaaaa");

  return (
    <div className="w-full p-4 bg-primary-500 text-white rounded-md shadow-md">
      <p className="text-lg font-semibold mb-1">{title}</p>
      {loading ? <p>Loading...</p> : <div>{render(data)}</div>}
    </div>
  );
};

export default DashboardCard;
