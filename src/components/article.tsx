"use client";

import { ArticlesTypes } from "@/app/page";
import { Playfair_Display_SC } from "@next/font/google";
import Link from "next/link";

const serif = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

export default function Article(params: ArticlesTypes) {
  return (
    <div className="h-full grayscale hover:grayscale-0 ease-in-out duration-300">
      <Link href={params.url} target="_blank" className="flex flex-col gap-4">
        <div className="w-full h-60 relative my-4">
          <img
            src={params.urlToImage}
            alt={params.description}
            className="w-full h-full object-cover"
          />
          <div className="absolute border-2 border-black w-full h-full -bottom-[5px] -right-[5px] -z-50 text-black" />
        </div>
        <h1 style={serif.style}>{params.title}</h1>
        <p>{params.content !== null ? params.content : params.description}</p>
      </Link>
    </div>
  );
}
