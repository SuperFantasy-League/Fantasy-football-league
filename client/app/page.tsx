"use client";
import Navbar from "@/components/macro/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "motion/react";
import { useTransform, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [walletText, setWalletText] = useState(
    "Create Your wallet In seconds."
  );
  const [tagText, setTagText] = useState("simple");

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#adcdf5", "#0f0"]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > -5) {
        setWalletText("Focus on games, payouts are automatic");
        setTagText("convenient");
      } else {
        setWalletText("Create Your wallet In seconds.");
        setTagText("simple");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // bg-[#adcdf5]

  return (
    <>
      <Navbar />
      {/* font-[family-name:var(--font-geist-sans)] */}
      <main className="h-full">
        <section className="flex flex-col justify-center items-center hful py-24 -space-y-3">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold text-center inline-flex gap-2 items-center">
              Play the
              <Image src={"/play.svg"} alt="play" width={22} height={22} />
              game
            </p>

            <p className="text-2xl font-semibold text-center inline-flex items-center -pt-4">
              your way with ace
            </p>
          </div>
          <h1 className="text-[9em] tracking-tighter font-semibold inline-flex items-center gap-5 font-[family-name:var(--font-geist-sans)]">
            Play
            <span className="w-28 h-28 rounded-2xl flex justify-center items-center bg-black ">
              <Image
                src={"/fut.png"}
                alt="football"
                width={80}
                height={80}
                style={{ animation: "spin 4000ms linear infinite" }}
              />
            </span>
            Win.
          </h1>
          <div className="pt-7">
            <Button className="bg-black rounded-[50px] px-8 py-7 text-xl inline-flex gap-5 items-center border border-gray-500 shadow-lg">
              <div className="inline-flex items-center">
                <span className="w-4 h-4 border border-white animate-pulse delay-300 rounded-full bg-yellow-300"></span>
                <span className="w-4 h-4 border border-white animate-pulse delay-500 rounded-full bg-pink-300 -ml-2"></span>
                <span className="w-4 h-4 border border-white animate-pulse delay-700 rounded-full bg-blue-300 -ml-2"></span>
              </div>
              Get started
            </Button>
          </div>
        </section>

        <section className="py-16 features">
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              style={{ backgroundColor }}
              className=" h-2/4 w-3/4 flex flex-col justify-between items-start px-4 py-5 rounded-2xl ml-auto wallet"
            >
              <h3 className="text-4xl font-semibold tracking-tighter font-[family-name:var(--font-geist-sans)] flex items-start justify-between">
                {walletText}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </h3>
              <div className="px-3 rounded-3xl bg-blue-100">
                <p className="text-md font-semibold">{tagText}</p>
              </div>
            </motion.div>

            <div className="h-full border-2 border-black rounded-xl py-14 px-4">
              <div className="flex flex-col items-center gap-10">
                <h3 className="text-3xl font-bold tracking-tighter font-[family-name:var(--font-geist-sans)]">
                  Create Your wallet
                </h3>

                <div className="bg-[#adcdf5] h-40 w-48 flex justify-center items-center border border-black rounded-2xl">
                  <Image
                    src={"/purse.png"}
                    width={80}
                    height={80}
                    alt="twitter"
                  />
                </div>

                <div className="w-full py-3 bg-black text-center text-white rounded-2xl">
                  With a recovery phrase
                </div>

                <p className="text-sm">Or with your socials</p>

                <div className="flex justify-between items-center gap-5">
                  <div className="w-20 h-9 rounded-xl flex justify-center items-center bg-gray-300">
                    <Image
                      src={"/google.svg"}
                      width={16}
                      height={14}
                      alt="twitter"
                    />
                  </div>

                  <div className="w-20 h-9 rounded-xl flex justify-center items-center bg-gray-300">
                    <Image
                      src={"/telegram.svg"}
                      width={16}
                      height={14}
                      alt="twitter"
                    />
                  </div>

                  <div className="w-20 h-9 rounded-xl flex justify-center items-center bg-gray-300">
                    <Image
                      src={"/x.svg"}
                      width={16}
                      height={14}
                      alt="twitter"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-100/50 h-2/4 w-3/4 flex flex-col justify-between items-start px-4 py-5 rounded-2xl self-end mode">
              <h3 className="text-4xl font-medium tracking-tighter font-[family-name:var(--font-geist-sans)]">
                Using your social account or google
              </h3>
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-8 border border-black delay-300 rounded-full bg-yellow-300 flex justify-center items-center">
                  <Image
                    src={"/google.svg"}
                    width={16}
                    height={14}
                    alt="twitter"
                  />
                </div>
                <div className="w-8 h-8 border border-black delay-500 rounded-full bg-pink-300 flex justify-center items-center">
                  <Image
                    src={"/telegram.svg"}
                    width={16}
                    height={14}
                    alt="twitter"
                  />
                </div>
                <div className="w-8 h-8 border border-black delay-700 rounded-full bg-blue-300 flex justify-center items-center">
                  <Image src={"/x.svg"} width={16} height={14} alt="twitter" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="bg-[#fafafa] p-16 rounded-2xl">
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-6xl tracking-tighter font-semibold">
                  All the games that you love in one place <br /> on-chain
                </h2>
                <p className="text-xl font-light">
                  No jokes, we are bringing all the games that you love and
                  enjoy in one platform onchain. Ace every game and get Instant
                  payouts
                </p>
              </div>
              <video src="/vidvid.mp4" autoPlay muted loop></video>
            </div>
          </div>

          <div className="bg-[#fafafa] p-16 rounded-2xl">
            <div className="grid grid-cols-2 gap-10 items-center">
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-6xl tracking-tighter font-semibold">
                  Build the super team and play the game your way
                </h2>
                <p className="text-xl font-light">
                  Start building your dream team, accumulate points and claim
                  that wager!{" "}
                </p>
              </div>
              <Image
                src={"/Group86.png"}
                width={500}
                height={0}
                alt="twitter"
                className="pb-10"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
