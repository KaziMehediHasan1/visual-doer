"use client";
import { DeleteIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import deleteData from "@/hooks/deleteData";
import { useEffect, useState } from "react";
import getData from "@/hooks/getData";
import Image from "next/image";
type ProjectItem = {
  _id: string;
  title: string;
  images: [string];
  createdAt?: string;
};

type ProjectResponse = {
  success: boolean;
  message: string;
  data: ProjectItem[];
  status: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isProjectResponse(res: any): res is ProjectResponse {
  return res && Array.isArray(res.data);
}
const ProjectTable = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const res = await getData({ url: "/dashboard/projects/api", setLoader });

      if (isProjectResponse(res)) {
        setProjects(res.data);
      }

      setLoader(false);
    };

    fetchData();
  }, []);
  const handleDelete = async (id: string) => {
    const res = await deleteData({
      url: `/dashboard/projects/api?id=${id}`,
      setLoader,
    });

    if (!res.error) {
      setProjects((prev) => prev.filter((blog) => blog._id !== id));
    } else {
      console.error("Delete failed:", res.error);
    }
  };

  // console.log(loader, projects, "check-loader");
  return (
    <Table className="overflow-y-auto h-fit">
      <TableHeader>
        <TableRow className="bg-primary-100 text-black p-1">
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead className="w-[100px] text-center">Title</TableHead>
          <TableHead className="w-[100px] text-center">Image</TableHead>
          <TableHead className="w-[100px] text-center">Upload Date</TableHead>
          <TableHead className="w-[100px] text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loader ? (
          <TableCell>
            {" "}
            <p className="text-white font-semibold text-2xl text-center my-5">
              Loading...
            </p>
          </TableCell>
        ) : (
          <>
            {projects?.map((project, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {project?.title}
                </TableCell>
                <TableCell className="font-medium text-center flex gap-2 justify-center">
                  {project?.images.map((img: string, index: number) => {
                    return (
                      <Image
                        className="rounded-sm"
                        key={index}
                        width={50}
                        height={50}
                        alt="image"
                        src={img}
                      />
                    );
                  })}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {" "}
                  {new Date(project.createdAt!).toLocaleDateString()}
                </TableCell>

                <TableCell className="text-center">
                  <button
                    onClick={() => handleDelete(project._id)}
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

export default ProjectTable;
