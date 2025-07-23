"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FormEvent, useState } from "react";

const Blog = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const imageFile = formData.get("image") as File;

    const data = {
      title: formData.get("title") as string,
      subTitle: formData.get("subTitle") as string,
      tag: formData.get("tag") as string,
      image: URL.createObjectURL(imageFile),
      description: formData.get("description") as string,
    };

    console.log(data, previewImage, "✅ blog form data");
    // You can now send `data` to your backend API
  };

  return (
    <div className="text-white px-4 py-3 ">
      <Image height={300} width={300} src={previewImage} alt="image" />
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Blog;
