import Link from "next/link";
import React from "react";

interface InewcardProps{
  color: string,
  image: string,
  description: string | undefined,
  title: string,
  author: string,
  published: string
}

function NewsCard({color, image, description, title, author, published}: InewcardProps) {
  return (
    <Link href='/blogs/1'>
      <div className={`col-span-1 ${color} rounded-2xl p-5 h-150`}>
        <img
          className="h-80 m-auto"
          src={image? image: 'https://lgaming.ma/wp-content/uploads/2023/02/In-the-News.jpg'}
          alt="image"
        />
        <h3 className="font-bold text-2xl my-2 h-25 overflow-clip"> {title} </h3>
        <p className="h-20 overflow-clip">
          {description}
        </p>
        <div className="flex flex-col">
          <span className="text-green-400 font-thin text-sm">
            author: {author}
          </span>
          <span className="text-green-400 font-thin text-sm">
            published time : {published}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
