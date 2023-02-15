"use client";

import { Playfair_Display_SC } from "@next/font/google";
import { usePathname } from "next/navigation";

const serif = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

export default function Title() {
  const pathname = usePathname();

  return (
    <div className="relative w-full flex justify-center items-center my-10">
      <div className=" p-10 bg-[#ebebeb] relative flex">
        <h1 className="text-3xl z-10" style={serif.style}>
          {pathname === "/"
            ? "LATEST NEWS"
            : pathname?.toLocaleUpperCase().replace("/", "")}
        </h1>
        <div className="absolute w-1/2 h-5 bg-amber-400 m-auto bottom-10 right-8 " />
      </div>
      <div className="absolute w-full h-[2px] bg-black left-0 -z-50" />
    </div>
  );
}
