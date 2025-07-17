import { Root } from "@/components/countries";
import NewsCard from "@/components/NewsCard";
import React from "react";

interface IpropsType {
  searchParams: Promise<{ title: string }>;
  params: Promise<[]>;
}

async function page(props: IpropsType) {
  const categoryName = await props.searchParams;
  const result = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );
  const data = (await result.json()) as Root;
  return (
    <div>
      <h1 className="text-4xl font-black my-10">{categoryName.title} news</h1>
      <div className="grid grid-cols-4 gap-5 ">
        {data.results
          .filter((i) => i.category.includes(categoryName.title))
          .map((item) => (
            <NewsCard
              published={item.pubDate}
              author={item.source_name}
              key={item.article_id}
              image={item.image_url}
              title={item.title}
              description={item.description}
              color="bg-blue-200"
            />
          ))}
      </div>
    </div>
  );
}

export default page;
