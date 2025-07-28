import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getData from "@/hooks/getData";
import { DeleteIcon } from "lucide-react";
import { useEffect, useState } from "react";


type BlogItem = {
  _id: string;
  title: string;
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

const CommonTable = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const res = await getData({ url: "/dashboard/blog/api", setLoader });

      if (isBlogResponse(res)) {
        setBlogs(res.data);
      }

      setLoader(false);
    };

    fetchData();
  }, []);
  const handleDelete = (id: string) => {
    console.log(id, "check id ");
  };
  console.log(loader, blogs, "check-loader");
  return (
    <Table className="overflow-y-auto h-fit">
      <TableHeader>
        <TableRow className="bg-primary-100 text-black p-1">
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead className="w-[100px] text-center">Blog</TableHead>
          <TableHead className="w-[100px] text-center">Upload Date</TableHead>
          <TableHead className="w-[100px] text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs?.map((blog, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium text-center">
              {blog?.title}
            </TableCell>
            <TableCell className="font-medium text-center"> {new Date(blog.createdAt!).toLocaleDateString()}</TableCell>

            <button
              onClick={() => handleDelete(blog?._id)}
              className="flex items-center w-fit mx-auto flex-col cursor-pointer"
            >
              <TableCell>
                <DeleteIcon className="font-medium text-center" />
              </TableCell>
            </button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default CommonTable;
