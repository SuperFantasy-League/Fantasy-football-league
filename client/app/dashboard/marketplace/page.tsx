"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";

const NFTCard = ({ nft }) => (
  <Card className="group overflow-hidden transition-all hover:shadow-lg">
    <CardHeader className="p-0 relative">
      <Image
        src={nft.image}
        width={400}
        alt={nft.name}
        className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute top-2 right-2">
        <Badge
          variant="secondary"
          className="bg-black/50 text-white backdrop-blur-sm"
        >
          {nft.price} ETH
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="p-4">
      <h3 className="font-bold text-lg mb-1 truncate">{nft.name}</h3>
      <p className="text-sm text-gray-500 mb-2">By {nft.creator}</p>
      <p className="text-sm text-gray-600 line-clamp-2">{nft.description}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <span className="text-sm text-gray-600">{nft.likes}</span>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Share2 className="w-5 h-5 text-gray-600" />
      </button>
    </CardFooter>
  </Card>
);

const NFTGrid = () => {
  // Sample NFT data - replace with your actual data
  const nfts = [
    {
      id: 1,
      name: "Cosmic Dreamer #1",
      creator: "CryptoArtist",
      description:
        "A mesmerizing piece that captures the essence of cosmic dreams and infinite possibilities.",
      price: 0.5,
      image: "/1.png",
      likes: 234,
    },
    {
      id: 2,
      name: "Digital Revolution",
      creator: "NFTMaster",
      description:
        "An abstract representation of the digital age and technological advancement.",
      price: 1.2,
      image: "/api/placeholder/400/400",
      likes: 187,
    },
    {
      id: 3,
      name: "Pixel Paradise",
      creator: "PixelPro",
      description:
        "A vibrant pixel art landscape showcasing a beautiful digital paradise.",
      price: 0.8,
      image: "/api/placeholder/400/400",
      likes: 156,
    },
    {
      id: 4,
      name: "Future Funk",
      creator: "CyberCreator",
      description:
        "A retro-futuristic piece blending nostalgic elements with modern digital art.",
      price: 2.0,
      image: "/api/placeholder/400/400",
      likes: 312,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured NFTs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default NFTGrid;
