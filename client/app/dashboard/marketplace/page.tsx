import NFTCard from "../../../components/micro/NftCard";

export default function Home() {
  // Sample NFT data
  const nfts = [
    {
      id: 1,
      name: "Mohammed Salah #1234",
      description: "The Egyptian King.",
      price: "50",
      image: "/images/4.jpg", // Path to the image
    },
    {
      id: 2,
      name: "Rafael Leao #4321",
      description: " The Smiling Portugese Ace.",
      price: "80",
      image: "/images/2.png", // Path to the image
    },
    {
      id: 3,
      name: "CR7 #8765",
      description: "Ororo The GOAT.",
      price: "10",
      image: "/images/5.jpg", // Path to the image
    },
    {
      id: 4,
      name: "Lionel Messi #8765",
      description: "Ankara Messi.",
      price: "10",
      image: "/images/6.jpg", // Path to the image
    },
    {
      id: 5,
      name: "CR7 #8765",
      description: "Ororo The GOAT.",
      price: "10",
      image: "/images/5.jpg", // Path to the image
    },
    {
      id: 6,
      name: "Lionel #8765",
      description: "The Argentinian",
      price: "10",
      image: "/images/6.jpg", // Path to the image
    },
    {
      id: 7,
      name: "CR7 #8765",
      description: "Ororo The GOAT.",
      price: "10",
      image: "/images/3.png", // Path to the image
    },
    {
      id: 8,
      name: "CR7 #8765",
      description: "Ororo The GOAT.",
      price: "10",
      image: "/images/5.jpg", // Path to the image
    },
    // Add more NFTs as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">NFT Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}
