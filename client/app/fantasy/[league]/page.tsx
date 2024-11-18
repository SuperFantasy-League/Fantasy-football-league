"use client";

import Navbar from "@/components/macro/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const League = () => {
  const pathname = usePathname();
  const league = pathname.replace("/fantasy/", "");

  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="pt-8 pb-4">
        <button className="flex items-center text-black/80 hover:text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Home</span>
        </button>
        <h1 className="text-3xl font-bold text-black">League Name</h1>
      </div>
      <nav className="bg-[#ecefec] py-8 px-16 inline-flex items-center w-full absolute left-0">
        <div className="pr-3">
          <Link
            href={"/"}
            className="px-5 py-2 text-base hover:underline hover:underline-offset-8"
          >
            Overview
          </Link>
        </div>
        <div className="px-3">
          <Link
            href={"/"}
            className="px-5 py-2  text-base hover:underline hover:scale-105 hover:underline-offset-8"
          >
            My Team
          </Link>
        </div>
        <div className="px-3">
          <Link
            href={"/"}
            className="px-5 py-2   text-base hover:underline hover:scale-105 hover:underline-offset-8"
          >
            Matches
          </Link>
        </div>
        <div className="pl-3">
          <Link
            href={"/"}
            className="px-5 py-2 rounded-3xl  text-base hover:underline hover:scale-105 hover:underline-offset-8"
          >
            Leagues
          </Link>
        </div>
      </nav>
    </>
  );
};

export default League;
