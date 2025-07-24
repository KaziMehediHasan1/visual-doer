"use client";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import axios from "axios";
const Blog = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    // const formData = new FormData();

    // get raw input values
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const subtitle = (form.elements.namedItem("subTitle") as HTMLInputElement)
      .value;
    const keyword = (form.elements.namedItem("tag") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;
    const imageFile = (form.elements.namedItem("image") as HTMLInputElement)
      ?.files?.[0];

    console.log(imageFile, "right image too?");

    const data = { title, subtitle, keyword, description, imageFile };

    try {
      const res = await axios.post("/dashboard/blog/api", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error("Upload failed", error);
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
