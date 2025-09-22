"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import BlogImage from "../../assets/images/image.png";
import "swiper/css";
import "swiper/css/pagination";
import getData from "hooks/getData";
import { useState } from "react";

const BlogCard = ({ id = "sample-id" }: { id: string }) => {
  const blogItems = [1, 2, 3, 4];
  const [loader,setLoader] = useState(false)
  getData({url:"dashboard/ap", setLoader})

  return (
    <>
      {/* ✅ Grid layout for lg+ */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {blogItems.slice(0, 3).map((_, index) => (
          <Link key={index} href={`/blog/${id}`} className="space-y-2">
            <Image
              src={BlogImage.src}
              alt={`blog-${index}`}
              width={400}
              height={200}
              className="w-full max-w-[384px] mx-auto aspect-[4/3] object-cover rounded-[1rem]"
            />
            <ul className="text-sm lg:text-xl text-white list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Blog title {index + 1}</span>
              </li>
            </ul>
          </Link>
        ))}
      </div>

      {/* ✅ Swiper with paginate center below for mobile & tablet */}
      <div className="lg:hidden w-full flex flex-col items-center gap-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
          }}
          className="w-full gap-5 md:gap-3 !overflow-visible"
        >
          {blogItems.map((_, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/blog/${id}`}
                className="space-y-2 w-full max-w-[384px] mx-auto object-cover  block"
              >
                <Image
                  src={BlogImage.src}
                  alt={`blog-${index}`}
                  width={400}
                  height={200}
                  className="w-full max-w-[calc(100%-2vmax)] h-fit aspect-auto object-cover mx-auto rounded-[1rem]"
                />
                <ul className="text-sm lg:text-xl text-white list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>Blog title {index + 1}</span>
                  </li>
                </ul>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination !relative !mt-2 flex justify-center gap-2" />
      </div>
    </>
  );
};

export default BlogCard;
