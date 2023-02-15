"use client";

import Article from "@/components/article";
import axios from "axios";
import { SetStateAction, useState } from "react";
import { useQuery } from "react-query";
import { ArticlesTypes } from "../page";

import { Raleway } from "@next/font/google";

const ralewayItalic = Raleway({
  subsets: ["latin"],
  weight: "700",
  style: "italic",
});

type CountriesType = {
  name: string;
  code: string;
};

export default function Countries() {
  const [country, setCountry] = useState("US");
  const [countries, setCountries] = useState<CountriesType[]>([
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Belgium", code: "BE" },
    { name: "Brazil", code: "BR" },
    { name: "Bulgaria", code: "BG" },
    { name: "Canada", code: "CA" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Cuba", code: "CU" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "France", code: "FR" },
    { name: "French Southern Territories", code: "TF" },
    { name: "Germany", code: "DE" },
    { name: "Greece", code: "GR" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Japan", code: "JP" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Latvia", code: "LV" },
    { name: "Lithuania", code: "LT" },
    { name: "Malaysia", code: "MY" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Morocco", code: "MA" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nigeria", code: "NG" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "Samoa", code: "WS" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Serbia", code: "RS" },
    { name: "Singapore", code: "SG" },
    { name: "Slovenia", code: "SI" },
    { name: "South Africa", code: "ZA" },
    { name: "Spain", code: "ES" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Taiwan, Province of China", code: "TW" },
    { name: "Thailand", code: "TH" },
    { name: "Turkey", code: "TR" },
    { name: "Tuvalu", code: "TV" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Venezuela", code: "VE" },
  ]);
  const { data, isFetching } = useQuery<ArticlesTypes[]>(country, async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=4e3c87d9cb4a48a7a596bb28504cb3b6`
    );
    console.log(response.data.articles);
    return response.data.articles;
  });

  function handleSelected(e: { target: { value: SetStateAction<string> } }) {
    setCountry(e.target.value);
  }

  return (
    <main>
      <div className="right-0 float-right relative my-10">
        <select
          value={country}
          onChange={handleSelected}
          className="flex items-center justify-center bg-[#ebebeb] border-2 border-black relative h-12"
          style={ralewayItalic.style}
        >
          {countries.map((country, index) => {
            return (
              <option value={country.code} key={index}>
                {country.name}
              </option>
            );
          })}
        </select>
        <div className="absolute bg-black w-full h-full -bottom-[5px] -right-[5px] -z-50 text-black" />
      </div>
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
