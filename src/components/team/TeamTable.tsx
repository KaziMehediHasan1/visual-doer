"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DeleteIcon } from "lucide-react";
import Image from "next/image";
import Swal from "sweetalert2";
import getData from "hooks/getData";
import deleteData from "hooks/deleteData";
type TeamItem = {
  _id: string;
  name: string;
  designation: string;
  image: string;
  createdAt: string;
};

type TeamResponse = {
  success: boolean;
  message: string;
  data: TeamItem[];
  status: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTeamResponse(res: any): res is TeamResponse {
  return res && Array.isArray(res.data);
}
const TeamTable = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [teams, setTeam] = useState<TeamItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const res = await getData({ url: "/dashboard/team/api", setLoader });

      if (isTeamResponse(res)) {
        setTeam(res.data);
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
        url: `/dashboard/team/api?id=${id}`,
        setLoader,
      });

      if (!res.error) {
        setTeam((prev) => prev.filter((blog) => blog._id !== id));
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      } else {
        Swal.fire("Error", "Something went wrong while deleting.", "error");
        console.error("Delete failed:", res.error);
      }

      setLoader(false);
    }
  };
  return (
    <Table className="overflow-y-auto max-h-[400px]">
      <TableHeader>
        <TableRow className="bg-primary-100 text-black p-1">
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead className="w-[100px] text-center">Name</TableHead>
          <TableHead className="w-[100px] text-center">Design.</TableHead>
          <TableHead className="w-[100px] text-center">Image</TableHead>
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
            {teams?.map((team, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {team?.name}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {team?.designation}
                </TableCell>
                <TableCell className="font-medium text-center flex gap-2 justify-center">
                  <Image
                    className="rounded-sm"
                    key={index}
                    width={50}
                    height={50}
                    alt="image"
                    src={team.image}
                  />
                </TableCell>
                <TableCell className="font-medium text-center">
                  {new Date(team.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell className="text-center">
                  <button
                    onClick={() => handleDelete(team._id)}
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

export default TeamTable;
