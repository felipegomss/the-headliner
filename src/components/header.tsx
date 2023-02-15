"use client";

import Link from "next/link";
import { Playfair_Display_SC, Raleway } from "@next/font/google";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <nav
        style={raleway.style}
        className="flex sm:flex-row w-full py-10 justify-between items-center"
      >
        <div>
          <Link href={"/"}>
            <h1 style={serif.style} className="text-2xl">
              The
              <span className="text-amber-500">.</span>
              Headliner
            </h1>
          </Link>
        </div>
        <div className="sm:flex hidden gap-10 justify-start text-lg">
          <Link
            href={"/"}
            className={`${
              pathname == "/"
                ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
                : "text-gray-500"
            } hover:text-black relative flex justify-center items-center`}
          >
            HOME
            {/* <div className="absolute w-2/3 h-2/3 bg-amber-400 mx-auto top-2/3 -translate-y-1/2 -z-50" /> */}
          </Link>
          <Link
            href={"/categories"}
            className={`${
              pathname == "/categories"
                ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
                : "text-gray-500"
            } hover:text-black relative flex justify-center items-center`}
          >
            CATEGORIES
          </Link>
          <Link
            href={"/countries"}
            className={`${
              pathname == "/countries"
                ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
                : "text-gray-500"
            } hover:text-black relative flex justify-center items-center`}
          >
            COUNTRIES
          </Link>
          <Link
            href={"/sources"}
            className={`${
              pathname == "/sources"
                ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
                : "text-gray-500"
            } hover:text-black relative flex justify-center items-center`}
          >
            SOURCES
          </Link>
        </div>
        <Link
          href={"https://felipegomes.me"}
          style={ralewayItalic.style}
          className="flex items-center justify-center bg-[#ebebeb] border-2 border-black relative w-40 h-12"
          target="_blank"
        >
          <h1 className="text-black z-50">CONTACT US</h1>
          <div className="absolute bg-black w-full h-full -bottom-[5px] -right-[5px] -z-50 text-black" />
        </Link>
      </nav>
      <div className="flex justify-between text-lg sm:hidden">
        <Link
          href={"/"}
          className={`${
            pathname == "/"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } hover:text-black relative flex justify-center items-center`}
        >
          HOME
        </Link>
        <Link
          href={"/categories"}
          className={`${
            pathname == "/categories"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } hover:text-black relative flex justify-center items-center`}
        >
          CATEGORIES
        </Link>
        <Link
          href={"/countries"}
          className={`${
            pathname == "/countries"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } hover:text-black relative flex justify-center items-center`}
        >
          COUNTRIES
        </Link>
        <Link
          href={"/sources"}
          className={`${
            pathname == "/sources"
              ? "text-black before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:bg-amber-400 before:mx-auto before:top-2/3 before:-translate-y-1/2 before:-z-50 "
              : "text-gray-500"
          } hover:text-black relative flex justify-center items-center`}
        >
          SOURCES
        </Link>
      </div>
    </>
  );
}
