"use client";
import Image from "next/image";

export default function NFTCard({ nft }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full">
      <div className="relative h-56 w-full">
        <Image
          src={nft.image}
          alt={nft.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{nft.name}</h3>
        <p className="text-gray-600 text-sm">{nft.description}</p>
        <div className="flex items-center mt-4">
          <span className="text-xl font-bold text-green-600">
            {nft.price} ETH
          </span>
        </div>
      </div>
    </div>
  );
}
