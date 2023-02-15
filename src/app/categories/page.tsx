"use client";

import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { ArticlesTypes } from "../page";

import { Playfair_Display_SC, Raleway } from "@next/font/google";
import Article from "@/components/article";

const serif = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "700",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});
const ralewayItalic = Raleway({
  subsets: ["latin"],
  weight: "700",
  style: "italic",
});

export default function Categories() {
  const [category, setCategory] = useState("BUSINESS");
  const { data, isFetching } = useQuery<ArticlesTypes[]>(category, async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category.toLocaleLowerCase()}&language=${"en"}&apiKey=4e3c87d9cb4a48a7a596bb28504cb3b6`
    );
    console.log(response.data.articles);
    return response.data.articles;
  });
  function handleCategory(category: string) {
    setCategory(category);
  }
  return (
    <main>
      <nav
        className="flex w-full justify-between my-10 flex-wrap"
        style={raleway.style}
      >
        <button
          onClick={() => handleCategory("BUSINESS")}
          className={`${
            category == "BUSINESS"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } relative`}
        >
          BUSINESS
        </button>
        <button
          onClick={() => handleCategory("ENTERTAINMENT")}
          className={`${
            category == "ENTERTAINMENT"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } relative`}
        >
          ENTERTAINMENT
        </button>
        <button
          onClick={() => handleCategory("GENERAL")}
          className={`${
            category == "GENERAL"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } relative`}
        >
          GENERAL
        </button>
        <button
          onClick={() => handleCategory("HEALTH")}
          className={`${
            category == "HEALTH"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } relative`}
        >
          HEALTH
        </button>
        <button
          onClick={() => handleCategory("SCIENCE")}
          className={`${
            category == "SCIENCE"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } relative`}
        >
          SCIENCE
        </button>
        <button
          onClick={() => handleCategory("SPORTS")}
          className={`${
            category == "SPORTS"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } relative`}
        >
          SPORTS
        </button>
        <button
          onClick={() => handleCategory("TECHNOLOGY")}
          className={`${
            category == "TECHNOLOGY"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } relative`}
        >
          TECHNOLOGY
        </button>
      </nav>
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
            <Article
              author={news.author}
              content={news.content}
              description={news.description}
              publishedAt={news.publishedAt}
              source={news.source}
              title={news.title}
              url={news.url}
              urlToImage={news.urlToImage}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
}
