"use client";
import ReviewTable from "@/components/review/ReviewTable";
import { Button } from "@/components/ui/button";
import uploadFormData from "@/hooks/uploadFormData";
import uploadToCloudinary from "@/hooks/useUploadCloudinary";
import { LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const Review = () => {
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const review = (form.elements.namedItem("review") as HTMLInputElement)
      .value;
    const totalReview = form.totalReview.value;
    const clientName = form.clientName.value;
    const designation = form.designation.value;
    const company = form.company.value;
    const companyImage = form.companyImage.files?.[0];
    setLoader(true);
    const imageUrl = await uploadToCloudinary(companyImage);
    if (imageUrl) {
      const data = {
        review,
        totalReview,
        clientName,
        designation,
        company,
        companyImage: imageUrl,
      };

      await uploadFormData({ data, url: "/dashboard/review/api", setLoader });
    }
    setLoader(false);
    form.reset();
  };
  return (
    <div className="text-white px-4 py-3 space-y-10">
      <section className="text-white  space-y-4">
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
              placeholder="Enter review"
            />
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="number"
              name="totalReview"
              placeholder="Enter total-reviews"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="clientName"
              placeholder="Enter client-Name"
            />
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="designation"
              placeholder="Enter designation"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="text"
              name="company"
              placeholder="Enter company name (optional)"
            />
            <input
              accept="image/webp,image/avif"
              className="w-full border-gray-300 border-[2px] rounded-sm p-[0.3vmax]"
              type="file"
              name="companyImage"
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
          Review Table
        </h1>
        <ReviewTable />
      </section>
    </div>
  );
};

export default Review;
