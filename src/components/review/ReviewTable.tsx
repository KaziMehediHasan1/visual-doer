import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import deleteData from "@/hooks/deleteData";
import getData from "@/hooks/getData";
import { DeleteIcon } from "lucide-react";
import { useEffect, useState } from "react";

type BlogItem = {
  _id: string;
  company: string;
  totalReview: number;
  designation: string;
  clientName: string;
  createdAt?: string;
};

type BlogResponse = {
  success: boolean;
  message: string;
  data: BlogItem[];
  status: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isBlogResponse(res: any): res is BlogResponse {
  return res && Array.isArray(res.data);
}

const ReviewTable = () => {
   const [loader, setLoader] = useState(false);
  const [review, setReview] = useState<BlogItem[]>([]);

  const fetchData = async () => {
    setLoader(true);
    const res = await getData({ url: "/dashboard/review/api", setLoader });
    if (isBlogResponse(res)) {
      setReview(res.data);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await deleteData({
      url: `/dashboard/review/api?id=${id}`,
      setLoader,
    });

    if (!res.error) {
      setReview((prev) => prev.filter((blog) => blog._id !== id));
      // or await fetchData();
    } else {
      console.error("Delete failed:", res.error);
    }
  };
  return (
    <Table className="overflow-y-auto h-fit">
      <TableHeader>
        <TableRow className="bg-primary-100 text-black p-1">
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead className="w-[100px] text-center">Company</TableHead>
          <TableHead className="w-[100px] text-center">Client</TableHead>
          <TableHead className="w-[100px] text-center">Designation</TableHead>
          <TableHead className="w-[100px] text-center">Upload Date</TableHead>
          <TableHead className="w-[100px] text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {review?.map((reviews, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {reviews?.company}
            </TableCell>
            <TableCell className="font-medium text-center">
              {" "}
              {reviews.clientName}
            </TableCell>
            <TableCell className="font-medium text-center">
              {" "}
              {reviews.designation}
            </TableCell>
            <TableCell className="font-medium text-center">
              {" "}
              {new Date(reviews.createdAt!).toLocaleDateString()}
            </TableCell>

            <TableCell className="text-center">
              <button
                onClick={() => handleDelete(reviews._id)}
                className="flex items-center justify-center w-full cursor-pointer"
              >
                <DeleteIcon />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ReviewTable;
