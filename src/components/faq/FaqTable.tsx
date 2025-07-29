"use client";
import deleteData from "@/hooks/deleteData";
import getData from "@/hooks/getData";
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
type FaqItem = {
  _id: string;
  question: string;
  answer: string;
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
const FaqTable = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [faqs, setFaq] = useState<FaqItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const res = await getData({ url: "/dashboard/faq/api", setLoader });

      if (isFaqResponse(res)) {
        setFaq(res.data);
      }

      setLoader(false);
    };

    fetchData();
  }, []);
  const handleDelete = async (id: string) => {
    const res = await deleteData({
      url: `/dashboard/faq/api?id=${id}`,
      setLoader,
    });

    if (!res.error) {
      setFaq((prev) => prev.filter((faq) => faq._id !== id));
    } else {
      console.error("Delete failed:", res.error);
    }
  };

  console.log(loader, faqs, "check-loader");
  return (
    <Table className="overflow-y-auto h-fit">
      <TableHeader>
        <TableRow className="bg-primary-100 text-black p-1">
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead className="w-[100px] text-center">Question</TableHead>
          <TableHead className="w-[100px] text-center">Answer</TableHead>
          <TableHead className="w-[100px] text-center">Upload Date</TableHead>
          <TableHead className="w-[100px] text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {faqs?.map((faq, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {faq?.question}
            </TableCell>
            <TableCell className="font-medium text-center">
              {faq?.answer}
            </TableCell>
            <TableCell className="font-medium text-center">
              {" "}
              {new Date(faq.createdAt!).toLocaleDateString()}
            </TableCell>

            <TableCell className="text-center">
              <button
                onClick={() => handleDelete(faq._id)}
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

export default FaqTable;
