import Image from "next/image";
import Link from "next/link";
// import { Button } from "../ui/button";
import ConnectWallet from "../ConnectWallet"

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <Image src={"/logo1.png"} alt={"Logo"} width={200} height={100} />
        <nav className="py-4 px-4 rounded-xl bg-[#ecefec] inline-flex items-center divide-x divide-[#d1d6d2]">
          <div className="pr-3">
            <Link
              href={"/dashboard/fantasy"}
              className="px-5 py-2 rounded-3xl hover:bg-[#d1d6d2] text-sm"
            >
              Fantasy
            </Link>
          </div>
          <div className="px-3">
            <Link
              href={"/dashboard/wager"}
              className="px-5 py-2 rounded-3xl hover:bg-[#d1d6d2] text-sm"
            >
              Wager
            </Link>
          </div>
          <div className="px-3">
            <Link
              href={"/dashboard/betting"}
              className="px-5 py-2 rounded-3xl hover:bg-[#d1d6d2] text-sm"
            >
              Betting
            </Link>
          </div>
          <div className="pl-3">
            <Link
              href={"/dashboard/marketplace"}
              className="px-5 py-2 rounded-3xl hover:bg-[#d1d6d2] text-sm"
            >
              Nft Marketplace
            </Link>
          </div>
        </nav>
        <ConnectWallet theme="light" />
        {/* <Button className="bg-black rounded-3xl px-6 py-6 text-md"> */}
        {/* Get started
        </ConnectWallet> */}
      </header >
    </>
  );
};

export default Navbar;
