"use client";


import FaqTable from "components/faq/FaqTable";
import TagInput from "components/reuse/TagInput";
import { Button } from "components/ui/button";
import uploadFormData from "hooks/uploadFormData";
import { LoaderCircle } from "lucide-react";
import React, { FormEvent, useState } from "react";

const Faq = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const question = (form.elements.namedItem("question") as HTMLInputElement)
      .value;
    const answer = form.answer.value;
    const data = {
      question,
      answer,
      keyword: tags,
    };
    setLoader(true);
    if (data) {
      await uploadFormData({ data, url: "/dashboard/faq/api", setLoader });
    }
    setLoader(false);
    form.reset();
    setTags([]);
  };

  return (
    <div className="text-white px-4 py-3 space-y-10">
      <section className="text-white  space-y-4">
        <h1 className="font-semibold text-[2vmax] text-center bg-primary-100 text-black p-1 rounded-sm">
          Add a Faq
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-primary-400/30 rounded-lg p-3 space-y-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="question"
              placeholder="Enter a Question"
            />
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="answer"
              placeholder="Enter a Answer"
            />
          </div>

          <TagInput setTags={setTags} tags={tags} />

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
          FAQ Table
        </h1>
        <FaqTable />
      </section>
    </div>
  );
};

export default Faq;
