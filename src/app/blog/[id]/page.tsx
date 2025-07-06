import { Metadata } from "next";

type BlogDetailProps = {
  params: {
    id: string;
  };
};



export default async function BlogDetails({ params }: BlogDetailProps) {
  const id = params.id;

  console.log("Blog ID:", id); // will show in terminal (not browser)

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">Blog ID: {id}</h1>
      <p>This is the detail page for blog ID: {id}</p>
    </div>
  );
}
