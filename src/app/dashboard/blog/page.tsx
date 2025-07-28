"use client";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import uploadToCloudinary from "@/hooks/useUploadCloudinary";
import { LoaderCircle } from "lucide-react";
import uploadFormData from "@/hooks/uploadFormData";
import TagInput from "@/components/reuse/TagInput";
import BlogTable from "@/components/blog/BlogTable";

const Blog = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const subtitle = form.subtitle.value;
    // const keyword = form.tag.value;
    const description = form.description.value;
    const file = form.image.files?.[0];
    setLoader(true);
    const imageUrl = await uploadToCloudinary(file);
    if (imageUrl) {
      const data = {
        title,
        subtitle,
        keyword: tags,
        description,
        image: imageUrl,
      };

      await uploadFormData({ data, url: "/dashboard/blog/api", setLoader });
    }
    setLoader(false);
    form.reset();
    setTags([]);
  };

  return (
    <div className="text-white px-4 py-3 space-y-10">
      <section className="text-white  space-y-4">
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
              placeholder="Enter blog title"
            />
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="subtitle"
              placeholder="Enter blog subtitle"
            />
          </div>
          <div className="flex items-center gap-3">
            {/* <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="tag"
            placeholder="Enter blog related tags"
          /> */}
            <TagInput setTags={setTags} tags={tags} />
            <input
              accept="image/webp,image/avif"
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="file"
              name="image"
              placeholder="Enter blog image"
            />
          </div>
          <div className="w-full">
            <textarea
              name="description"
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              placeholder="Enter blog description"
            ></textarea>
          </div>
          <Button className="cursor-pointer" type="submit">
            {loader ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </form>
      </section>

      <section className="text-white  space-y-4">
        <h1 className="font-semibold text-[2vmax] text-center bg-primary-100 text-black p-1 rounded-sm">
          Blog Table
        </h1>
        <BlogTable />
      </section>
    </div>
  );
};

export default Blog;
