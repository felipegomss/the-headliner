"use client";

import Link from "next/link";
import { Playfair_Display_SC, Raleway } from "@next/font/google";

const serif = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "700",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
});
const ralewayBlack = Raleway({
  subsets: ["latin"],
  weight: "700",
});

export default function Footer() {
  return (
    <nav
      style={raleway.style}
      className="flex flex-col w-full py-20 justify-center items-center border-t-2 border-black mt-10 relative"
    >
      <Link href={"/"}>
        <h1 style={serif.style} className="sm:text-6xl text-3xl">
          The
          <span className="text-amber-500">.</span>
          Headliner
        </h1>
      </Link>
      <p className="sm:text-xl text-sm">
        A cluster of the mainly news portals of the world
      </p>
      <div className="absolute right-0 bottom-4">
        <p className="text-zinc-500 text-sm">
          made by{" "}
          <Link
            href="https://felipegomes.mes"
            className="underline underline-offset-4 hover:underline-offset-0"
          >
            Felipe Gomes
          </Link>{" "}
          inspired on{" "}
          <Link
            href="https://dribbble.com/shots/17556169-Landing-page-News-web"
            className="underline underline-offset-4 hover:underline-offset-0"
          >
            Mostafa_taghipour.uix{" "}
          </Link>
        </p>
      </div>
    </nav>
  );
}
