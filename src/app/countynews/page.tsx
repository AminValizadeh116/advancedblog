// app/countynews/page.tsx
import { Root } from "@/components/countries";
import NewsCard from "@/components/NewsCard";
import React from "react";

export default async function CountyNewsPage({searchParams}:{searchParams: Promise<{name: string}>}) {
  console.log(searchParams)
  const country = await searchParams
  const name = country.name

  const res = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
  );

  const data = (await res.json()) as Root;

  return (
    <div>
      <h1 className="text-3xl pt-10 font-black">{name} news</h1>
      <div className="grid grid-cols-3 gap-5">
        {
        data.status !== "error"?
        data.results
          .filter((item) => item.country[0] === name)
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
          )):
          <p>result not apearing</p>
          }
      </div>
    </div>
  );
}







// import { Root } from "@/components/countries";
// import NewsCard from "@/components/NewsCard";
// import React from "react";

// async function page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
//   const { name } = searchParams;

//   console.log(searchParams)

//   const res = await fetch(
//     "https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology"
//   );
//   const data = (await res.json()) as Root;

//   return (
//     <div>
//       <h1 className="text-3xl pt-10 font-black">{name} news</h1>
//       <div className="grid grid-cols-3 gap-5 ">
//         {data.results
//           .filter((item) => item.country[0] == name)
//           .map((i) => (
//             <NewsCard
//               IdHref= {i.article_id}
//               author={i.source_name}
//               published={i.pubDate}
//               title={i.title}
//               image={i.image_url}
//               description={i.description}
//               color="bg-neutral-400"
//               key={i.article_id}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default page;
