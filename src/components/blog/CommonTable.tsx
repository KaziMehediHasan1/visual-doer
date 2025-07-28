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

const BlogTable = () => {
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
  const handleDelete = async (id: string) => {
    const res = await deleteData({
      url:  `/dashboard/blog/api?id=${id}`,
      setLoader,
    });

    if (!res.error) {
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } else {
      console.error("Delete failed:", res.error);
    }
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
            <TableCell className="font-medium text-center">
              {" "}
              {new Date(blog.createdAt!).toLocaleDateString()}
            </TableCell>

            <TableCell className="text-center">
              <button
                onClick={() => handleDelete(blog._id)}
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
export default BlogTable;
