import { Root } from "@/components/countries";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  const result = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );
  const data = (await result.json()) as Root;

  if (!Array.isArray(data.results)) {
    console.error("data.results is not an array", data.results);
    return [];
  }

  return data.results.map((item) => ({ id: item.article_id }));
}

async function page({ params }: { params: Promise<{ id: string }> }) {
  const result = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );
  const data = (await result.json()) as Root;
  const { id } = await params;

  return (
    <div className="px-30">
      {data.status !== "error" ? (
        <>
          <h2 className="text-4xl font-black pt-10">
            {data.results.find((i) => i.article_id === id)?.title}{" "}
          </h2>
          <div className="flex items-center gap-4 py-3">
            <Image
              src={
                data.results.find((i) => i.article_id === id)
                  ?.source_icon as string
              }
              alt="icon"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-neutral-600">
              {data.results.find((i) => i.article_id === id)?.source_name}
            </span>
          </div>
          <div className="flex justify-center mb-10">
            <Image
              src={
                data.results.find((i) => i.article_id === id)?.image_url
                  ? (data.results.find((i) => i.article_id === id)
                      ?.image_url as string)
                  : 'https://lgaming.ma/wp-content/uploads/2023/02/In-the-News.jpg'
              }
              alt="news image"
              width={900}
              height={500}
            />
          </div>

          <p className="text-xl">
            {data.results.find((i) => i.article_id === id)?.description}
          </p>

          <ul className="flex gap-10 px-80">
            {data.results
              .find((i) => i.article_id === id)
              ?.keywords?.map((item) => (
                <li
                  key={
                    data.results.find(i => i.article_id === id)?.keywords?.indexOf(item)
                  }
                  className="text-blue-700"
                >
                  {item}
                </li>
              ))}
          </ul>
        </>
      ) : (
        <p>result not apearing</p>
      )}
    </div>
  );
}

export default page;
