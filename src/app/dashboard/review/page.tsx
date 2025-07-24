"use client";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect } from "react";
import { toast } from "sonner";

const Review = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      review: formData.get("review") as string,
      totalReview: formData.get("totalReview") as string,
      clientName: formData.get("clientName") as string,
      designation: formData.get("designation") as string,
      company: formData.get("company") as string,
    };

    if (
      data.review &&
      data.totalReview &&
      data.clientName &&
      data.designation &&
      data.company
    ) {
      toast("Review added successfully 🎉");
    } else {
      toast("Please fill out all fields 🫠");
    }
    console.log(data, "✅ blog form data");
  };
  return (
    <div className="text-white px-4 py-3 space-y-4">
      <h1 className="font-semibold text-[2vmax] text-center bg-primary-100 text-black p-1 rounded-sm">
        Add Customer Review
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-primary-400/30 rounded-lg p-3 space-y-5"
      >
        <div className="flex flex-wrap items-center gap-3">
          <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="review"
            placeholder="enter review"
          />
          <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="number"
            name="totalReview"
            placeholder="enter total-reviews"
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="clientName"
            placeholder="enter client-Name"
          />
          <input
            accept="image/webp,image/avif"
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="designation"
            placeholder="enter designation"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
            type="text"
            name="company"
            placeholder="enter company name"
          />
        </div>
        <Button className="cursor-pointer" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Review;
