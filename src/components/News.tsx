import React from "react";
import NewsCard from "./NewsCard";
import { Root } from "./countries";

async function News() {
  const result = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );
  const data = (await result.json()) as Root;
  console.log(data)

  return (
    <div className="bg-amber-950 mt-10">
    <h2 className="text-4xl font-black text-amber-50 p-10"> selected news </h2>
      <div className="mt-7 grid grid-cols-5 gap-3 px-3 py-5">
        {data.results.slice(0, 5).map((item) => (
          <NewsCard
            image={item.image_url}
            published={item.pubDate}
            title={item.title}
            author={item.source_name}
            description={item.description}
            color="bg-amber-50"
            key={item.article_id}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
