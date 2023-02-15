"use client";

import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";
import { SourceTypes } from "../page";

// import { Playfair_Display_SC } from "@next/font/google";

// const serif = Playfair_Display_SC({
//   subsets: ["latin"],
//   weight: "400",
// });

export default function Sources() {
  const { data, isFetching } = useQuery<SourceTypes[]>("sources", async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=4e3c87d9cb4a48a7a596bb28504cb3b6`
    );
    console.log(response.data.sources);
    return response.data.sources;
  });
  return (
    <main>
      <div
        className="w-full grid gap-10 place-items-center"
        style={{
          gridTemplateColumns: `repeat(
    auto-fill,
    [col-start] minmax(350px, 1fr) [col-end]`,
        }}
      >
        {isFetching && <p>Loading...</p>}
        {data?.map((news, index) => {
          return (
            <Link
              href={news.url ? news.url : "/"}
              className="flex flex-col gap-4 w-full h-full relative my-4 bg-[#ebebeb] border border-black"
              key={index}
            >
              <div className="h-full flex flex-col p-4 gap-4">
                <h1
                  // style={serif.style}
                  className="text-2xl"
                >
                  {news.name}
                </h1>
                <h2>{news.description}</h2>
              </div>
              <div className="absolute bg-black w-full h-full -bottom-[5px] -right-[5px] -z-50 text-black" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
