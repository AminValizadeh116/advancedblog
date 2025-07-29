"use client";
import { Root } from "@/components/countries";
import NewsCard from "@/components/NewsCard";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export function UnsuspenedCategory() {
  const [categoryData, setCategoryData] = useState<Root>();
  const searchParams = useSearchParams();
  const Title = searchParams.get("title") as string;

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
    ).then((res) => res.json().then((data) => setCategoryData(data)));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-black my-10">{Title} news</h1>
      {categoryData !== undefined ? (
        <div className="grid grid-cols-3 gap-5">
          {categoryData.status !== "error" ? (
            categoryData.results
              .filter((item) => item.category.includes(Title))
              .map((i) => (
                <NewsCard
                  IdHref={i.article_id}
                  author={i.source_name}
                  published={i.pubDate}
                  title={i.title}
                  image={i.image_url}
                  description={i.description}
                  color="bg-neutral-400"
                  key={i.article_id}
                />
              ))
          ) : (
            <p>result not apearing</p>
          )}
        </div>
      ) : (
        <p> waiting </p>
      )}
    </div>
  );
}

export default UnsuspenedCategory
