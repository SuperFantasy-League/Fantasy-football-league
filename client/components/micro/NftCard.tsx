"use client";
import Image from "next/image";

// Define the NFT type
interface NFT {
  image: string; // URL or path to the image
  name: string; // Name of the NFT
  description: string; // Description of the NFT
  price: string | number; // Price of the NFT, can be a string or number (e.g., "0.5" or 0.5 ETH)
}

// Define the props type for the NFTCard component
interface NFTCardProps {
  nft: NFT; // nft is required and follows the NFT structure
}

export default function NFTCard({ nft }: NFTCardProps) {
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
