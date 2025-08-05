"use client";

import ProjectTable from "components/projects/ProjectTable";
import TagInput from "components/reuse/TagInput";
import { Button } from "components/ui/button";
import uploadFormData from "hooks/uploadFormData";
import uploadToCloudinary from "hooks/useUploadCloudinary";
import { LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const Project = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const link = form.link.value;
    // const keyword = form.tag.value;
    const files = Array.from(form.image.files);
    setLoader(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const uploadPromises = files.map((file: any) => uploadToCloudinary(file));
    const imageUrl = await Promise.all(uploadPromises);
    // console.log(imageUrl, "dekhic");
    if (imageUrl) {
      const data = {
        title,
        link,
        keyword: tags,
        images: imageUrl,
      };

      await uploadFormData({ data, url: "/dashboard/projects/api", setLoader });
    }
    setLoader(false);
    form.reset();
    setTags([]);
  };
  return (
    <div className="text-white px-4 py-3 space-y-10">
      <section className="text-white space-y-4">
        <h1 className="font-semibold text-[2vmax] text-center bg-primary-100 text-black p-1 rounded-sm">
          Add a Project
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
              placeholder="Enter project title"
            />
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="link"
              placeholder="Enter project link"
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
              multiple
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="file"
              name="image"
              placeholder="Enter project images"
            />
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
          Project Table
        </h1>
        <ProjectTable />
      </section>
    </div>
  );
};

export default Project;
