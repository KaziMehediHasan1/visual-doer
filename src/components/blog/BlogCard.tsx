import Image from "next/image";
import BlogImage from "@/assets/images/image.png";
import Link from "next/link";

const BlogCard = ({
  image,
  text,
  alt,
  key,
  id="dfkakdf",
}: {
  image: string;
  text: string;
  alt: string;
  key?: string;
  id: string;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((_, index) => (
        <Link key={index} href={`/blog/${id}`} className="block space-y-2">
          <Image
            src={BlogImage.src}
            alt={`blog-${index}`}
            width={400}
            height={300}
            className="w-full aspect-[4/3] object-cover rounded-[1rem] lg:rounded-smcardRound"
          />
          <ul className="text-sm lg:text-base text-white list-none space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
              <span>Blog title {index + 1}</span>
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
