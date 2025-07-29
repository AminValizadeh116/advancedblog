import { Root } from "@/components/countries";
import React from "react";

export async function generateStaticParams(){
  const result = await fetch('https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology')
  const data = await result.json() as Root
  
  
  return data.results.map(item => (
    {id: item.article_id}
  ))
}

function page() {
  return <div>news details</div>;
}

export default page;

// https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology
