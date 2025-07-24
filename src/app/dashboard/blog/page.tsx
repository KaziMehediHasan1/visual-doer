"use client";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import axios from "axios";
const Blog = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log(formData,"10 just image")
    const imageFile = formData.get("image") as File;

    const title = formData.get("title") as string;
    const subtitle = formData.get("subTitle") as string;
    const keyword = formData.get("tag") as string;
    const image = URL.createObjectURL(imageFile);
    const description = formData.get("description") as string;
    const data = { title, subtitle, keyword, image, description };

    console.log(data.image, "✅ blog form data");
    try {
      const res = await axios.post("/dashboard/blog/api", data);
      console.log(res.data);
    } catch (error) {
      console.log(error, "upload err");
    }
  };

  return (
    <div className="text-white px-4 py-3 space-y-4">
      <h1 className="font-semibold text-[2vmax] text-center bg-primary-100 text-black p-1 rounded-sm">
        Add a Blog
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-primary-400/30 rounded-lg p-3 space-y-5"
      >
        <div className="flex flex-wrap items-center gap-3">
          <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="title"
            placeholder="enter blog title"
          />
          <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="subTitle"
            placeholder="enter blog subtitle"
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="tag"
            placeholder="enter blog title"
          />
          <input
            accept="image/webp,image/avif"
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="file"
            name="image"
            placeholder="enter blog image"
          />
        </div>
        <div className="w-full">
          <textarea
            name="description"
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            placeholder="enter blog description"
          ></textarea>
        </div>
        <Button className="cursor-pointer" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Blog;
