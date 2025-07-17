import { Root } from "@/components/countries";
import NewsCard from "@/components/NewsCard";
import React from "react";

async function articles() {
  const res = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );
  const data = (await res.json()) as Root;

  return (
    <div>
      <h1 className="text-5xl pt-15 font-black">Articles</h1>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {data.results.map((item) => (
          <NewsCard
            color="bg-red-400"
            author={item.source_name}
            description={item.description}
            image={item.image_url}
            published={item.pubDate}
            title={item.title}
            key={item.article_id}
          />
        ))}
      </div>
    </div>
  );
}

export default articles;
