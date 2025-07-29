"use client";
import { Root } from "@/components/countries";
import NewsCard from "@/components/NewsCard";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export function UnsuspendCountry() {
  const [countryData, setCountryData] = useState<Root | undefined>();
  const searchParams = useSearchParams();
  const name = searchParams.get("name") as string;

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
    ).then((res) => res.json().then((data) => setCountryData(data)));
  }, []);

  return (
    <div>
      <h1 className="text-3xl pt-10 font-black">{name} news</h1>

      {countryData !== undefined ? (
        <div className="grid grid-cols-3 gap-5">
          {countryData.status !== "error" ? (
            countryData.results
              .filter((item) => item.country.includes(name))
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

export default UnsuspendCountry
