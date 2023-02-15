"use client";

import Article from "@/components/article";
import axios from "axios";
import { useQuery } from "react-query";

export type ArticlesTypes = {
  source: SourceTypes;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type SourceTypes = {
  id: string;
  name: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
};

export default function Home() {
  const { data, isFetching } = useQuery<ArticlesTypes[]>("latest", async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?language=${"en"}&apiKey=4e3c87d9cb4a48a7a596bb28504cb3b6`
    );
    console.log(response.data);
    return response.data.articles;
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
