"use client";
import TeamTable from "components/team/TeamTable";
import { Button } from "components/ui/button";
import uploadFormData from "hooks/uploadFormData";
import uploadToCloudinary from "hooks/useUploadCloudinary";
import { LoaderCircle } from "lucide-react";
import React, { FormEvent, useState } from "react";

const Team = () => {
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const designation = form.designation.value;
    // const keyword = form.tag.value;
    const file = form.image.files?.[0];
    setLoader(true);
    const imageUrl = await uploadToCloudinary(file);
    if (imageUrl) {
      const data = {
        name,
        designation,
        image: imageUrl,
      };
      // console.log(data, "check data");
      await uploadFormData({ data, url: "/dashboard/team/api", setLoader });
    }
    setLoader(false);
    form.reset();
  };

  return (
    <div className="text-white px-4 py-3 space-y-10">
      <section className="text-white  space-y-4">
        <h1 className="font-semibold text-[2vmax] text-center bg-primary-100 text-black p-1 rounded-sm">
          Add a Team
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-primary-400/30 rounded-lg p-3 space-y-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="name"
              placeholder="Enter a name"
            />
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="designation"
              placeholder="Enter a designation"
            />
          </div>

          <div>
            <input
              accept="image/webp,image/avif"
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="file"
              name="image"
              placeholder="Enter blog image"
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
          Team Table
        </h1>
        <TeamTable />
      </section>
    </div>
  );
};

export default Team;
