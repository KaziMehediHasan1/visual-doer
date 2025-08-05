"use client";


import getData from "hooks/getData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DeleteIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import deleteData from "hooks/deleteData";
type FaqItem = {
  _id: string;
  title: string;
  description: string;
  createdAt?: string;
};

type ProjectResponse = {
  success: boolean;
  message: string;
  data: FaqItem[];
  status: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFaqResponse(res: any): res is ProjectResponse {
  return res && Array.isArray(res.data);
}
const SkillTable = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [services, setServices] = useState<FaqItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const res = await getData({ url: "/dashboard/skills/api", setLoader });

      if (isFaqResponse(res)) {
        setServices(res.data);
      }

      setLoader(false);
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      setLoader(true);

      const res = await deleteData({
        url: `/dashboard/skills/api?id=${id}`,
        setLoader,
      });

      if (!res.error) {
        setServices((prev) => prev.filter((blog) => blog._id !== id));
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      } else {
        Swal.fire("Error", "Something went wrong while deleting.", "error");
        console.error("Delete failed:", res.error);
      }

      setLoader(false);
    }
  };
  return (
    <Table className="overflow-y-auto h-fit">
      <TableHeader>
        <TableRow className="bg-primary-100 text-black p-1">
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead className="w-[100px] text-center">Title</TableHead>
          <TableHead className="w-[100px] text-center">Description</TableHead>
          <TableHead className="w-[100px] text-center">Upload Date</TableHead>
          <TableHead className="w-[100px] text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loader ? (
          <TableRow>
            <TableCell>
              <p className="text-white font-semibold text-2xl text-center my-5">
                Loading...
              </p>
            </TableCell>
          </TableRow>
        ) : (
          <>
            {services?.map((skill, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {skill?.title}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {skill?.description}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {" "}
                  {new Date(skill.createdAt!).toLocaleDateString()}
                </TableCell>

                <TableCell className="text-center">
                  <button
                    onClick={() => handleDelete(skill._id)}
                    className="flex items-center justify-center w-full cursor-pointer"
                  >
                    <DeleteIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default SkillTable;
