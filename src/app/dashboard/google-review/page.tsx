"use client";

import { Button } from "components/ui/button";
import uploadFormData from "hooks/uploadFormData";
import { LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const Project = () => {
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const review = (form.elements.namedItem("review") as HTMLInputElement)
      .value;
    console.log(review, "check google review");
    // const keyword = form.tag.value;
    setLoader(true);

    const data = { review };

    await uploadFormData({
      data,
      url: "/dashboard/google-review/api",
      setLoader,
    });

    setLoader(false);
    form.reset();
  };
  return (
    <div className="text-white px-4 py-3 space-y-10">
      <section className="text-white space-y-4">
        <h1 className="font-semibold text-[2vmax] text-center bg-primary-100 text-black p-1 rounded-sm">
          Add Google Review
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-primary-400/30 rounded-lg p-3 space-y-5"
        >
          <div className="flex items-center gap-3">
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="review"
              placeholder="Enter blog related tags"
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
    </div>
  );
};

export default Project;
