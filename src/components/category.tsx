import Image from "next/image";
import React, { Suspense } from "react";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function Category({
  altImage,
  image,
  title,
}: {
  image: object;
  altImage: string;
  title: string;
}) {
  return (
    <Suspense>
      <li className="col-span-1 text-white bg-gray-400 rounded-2xl p-2 shadow hover:scale-110">
        <Link
          href={{ pathname: "/category", query: { title } }}
          className="flex items-center justify-around"
        >
          <h3 className="pr-5 text-2xl font-bold">{title}</h3>
          <Image
            className="rounded-2xl h-20 w-40"
            src={image as StaticImport}
            alt={altImage}
          />
        </Link>
      </li>
    </Suspense>
  );
}

export default Category;
