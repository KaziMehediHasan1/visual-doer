import Image from "next/image";
import BlogImage from "@/assets/images/image.png";
const BlogCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((_, index) => (
        <Image
          key={index}
          src={BlogImage.src}
          alt={`blog-${index}`}
          width={400}
          height={300}
          className="w-full mx-w-1/3 aspect-[4/3] object-cover rounded-smcardRound"
        />
      ))}
    </div>
  );
};

export default BlogCard;
