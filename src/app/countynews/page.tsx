import { Root } from "@/components/countries";
import NewsCard from "@/components/NewsCard";
import React from "react";

interface IpropsType {
  params: Promise<string>;
  searchParams: Promise<{ name: string }>;
}

async function page(props: IpropsType) {
  const { name } = await props.searchParams;
  const res = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );
  const data = (await res.json()) as Root;

  return (
    <div>
      <h1 className="text-3xl pt-10 font-black">{name} news</h1>
      <div className="grid grid-cols-3 gap-5 ">
        {data.results
          .filter((item) => item.country[0] == name)
          .map((i) => (
            <NewsCard
              author={i.source_name}
              published={i.pubDate}
              title={i.title}
              image={i.image_url}
              description={i.description}
              color="bg-neutral-400"
              key={i.article_id}
            />
          ))}
      </div>
    </div>
  );
}

export default page;
