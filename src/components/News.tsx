import React from "react";
import NewsCard from "./NewsCard";
import { Root } from "./countries";

async function News() {
  const result = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );
  const data = (await result.json()) as Root;

  return (
    <div className="bg-amber-950 max-xl:p-4 p-10 mt-10 max-xl:overflow-x-auto max-xl:scroll-smooth">
    <h2 className="max-sm:text-2xl text-4xl font-black text-amber-50"> selected news </h2>
      <div className="mt-7 min-md:pr-10 max-sm:p-0 px-5 gap-3 max-xl:inline-flex grid grid-cols-5">
        {
          data.status !== "error" ?
        data.results.slice(0,5).map(item =>(
          <NewsCard
            IdHref={item.article_id}
            image={item.image_url}
            published={item.pubDate}
            title={item.title}
            author={item.source_name}
            description={item.description}
            color="bg-amber-50"
            key={item.article_id}
          />
        )):
        <p className="text-white">wait for a second</p>
        }
      </div>
    </div>
  );
}

export default News;
