"use client";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

function page() {
  const router = useRouter()
  const [newsData, setNewData] = useState({
    title: "",
    author: "",
    date: "",
    description: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleNewsDataChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNewsDescriptionChanges = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const sendData = () => {
    if (
      newsData.author &&
      newsData.date &&
      newsData.description &&
      newsData.title !== ""
    ) {
      router.push('/')
      console.log(newsData);
    } else {
       setShowAlert(true)
    }
  };

  useEffect(()=>{
    setTimeout(() => {
      setShowAlert(false)
    }, 5000);
  }, [sendData])

  // async function sendData() {
  //   const mmad = await fetch('https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology')
  //   const data = await mmad.json()

  //   return data
  // }

  // const result = await fetch('https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=technology&language=en&country=us,de,ca,ir&category=crime,health,technology', {
  //   method: 'POST',
  //   body: JSON.stringify({newsData})
  // })

  return (
    <div>
      <h1 className="text-4xl font-black my-10">create page</h1>
      <div className="flex flex-col w-120 m-auto">
        {showAlert ? (
          <div
            className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
            role="alert"
          >
            <p className="font-bold">Be Warned</p>
            <p>Something not ideal might be happening.</p>
          </div>
        ) : (
          <></>
        )}

        <Input handleChange={handleNewsDataChanges} name="title" />
        <Input handleChange={handleNewsDataChanges} name="author" />
        <Input handleChange={handleNewsDataChanges} name="date" />

        <Textarea
          handelChange={handleNewsDescriptionChanges}
          name="description"
        />
        <button
          className="mt-10 w-30 py-2 rounded bg-red-700 text-white border-2 border-red-700 hover:bg-white hover:text-red-700"
          onClick={sendData}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default page;
