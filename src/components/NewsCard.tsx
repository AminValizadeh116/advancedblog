import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InewcardProps{
  color: string,
  image: string,
  description: string | undefined,
  title: string,
  author: string,
  published: string
  IdHref: string
}

function NewsCard({color, image, description, title, author, published, IdHref}: InewcardProps) {
  return (
    <Link href={`/blogs/${IdHref}`}>
      <div className={`col-span-1 ${color} rounded-2xl p-5 h-150 max-sm:min-w-xs max-xl:min-w-sm`}>
        <Image
          width={400}
          height={100}
          className="h-80 m-auto"
          src={image? image: 'https://lgaming.ma/wp-content/uploads/2023/02/In-the-News.jpg'}
          alt="image"
        />
        <h3 className="font-bold text-2xl my-2 h-25 overflow-clip"> {title} </h3>
        <p className="h-16 overflow-clip">
          {description}
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-green-400 font-thin text-sm h-5 overflow-clip">
            author: {author}
          </span>
          <span className="text-green-400 font-thin text-sm h-5 overflow-clip">
            published time : {published}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
