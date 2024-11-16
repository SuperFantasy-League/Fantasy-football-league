import Image from "next/image";
import { Dropdown } from "../micro/Dropdown";
import { Button } from "../ui/button";
import GetStartedButton from "../micro/GetStartedButton";

const Footer = () => {
  const options = [
    { value: "English", label: "English" },
    { value: "Espanol", label: "Espanol" },
    { value: "Igbo", label: "Igbo" },
  ];

  return (
    <>
      <footer className="py-14">
        <Image src={"/logo1.png"} alt={"Logo"} width={500} height={100} />

        <div className="flex flex-col items-center mt-20 gap-16">
          <div className="grid grid-cols-3">
            <div className="inline-flex items-center gap-4 self-start">
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

            <div className="grid grid-cols-3 gap-16">
              <div className="space-y-4">
                <h3 className="font-medium text-xl">Product</h3>
                <ul className="space-y-2">
                  <li className="text-sm font-light">Fantasy</li>
                  <li className="text-sm font-light">Wager</li>
                  <li className="text-sm font-light">Betting</li>
                  <li className="text-sm font-light">Nft marketplace</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-xl">Company</h3>
                <ul className="space-y-2">
                  <li className="text-sm font-light">Introducing ace</li>
                  <li className="text-sm font-light">About</li>
                  <li className="text-sm font-light">Privacy</li>
                  <li className="text-sm font-light">Terms</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-xl">Resources</h3>
                <ul className="space-y-2">
                  <li className="text-sm font-light">News</li>
                  <li className="text-sm font-light">Docs</li>
                  <li className="text-sm font-light">Insights</li>
                </ul>
              </div>
            </div>

            <div className="place-self-center self-start">
              <Dropdown options={options} active={"English"} />
            </div>
          </div>

          <GetStartedButton />

          <div className="inline-flex items-center gap-2 text-gray-600">
            <p className="text-xs">Terms of use</p>
            <p className="text-xs">Privacy policy</p>
            <p className="text-xs">Cookie preference</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
