"use client";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

const Blog = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const input = e.target;
    const title = input.title.value;
    const subTitle = input.subTitle.value;
    const image = input.image.value;
    const description = input.description.value;
    const data = { title, subTitle, tag, image, description };
    console.log(data, "blog form data");
  };
  return (
    <div className="text-white px-4 py-3 ">
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Blog;
