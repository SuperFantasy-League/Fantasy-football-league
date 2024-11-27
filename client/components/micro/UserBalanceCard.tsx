import { useActiveAccount } from "thirdweb/react";
import UseFetchBalance from "@/hooks/contract-hooks/useFetchBalance";
import DepositModal from "../macro/DepositModal";
import { formatEther } from "viem";
import { useEffect, useState } from "react";
import WithdrawModal from "../macro/WithdrawModal";
import LoadingModal from "../LoadingModal";

const UserBalanceCard = () => {
  const account = useActiveAccount();
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { balance, balanceLoading } = UseFetchBalance();

  useEffect(() => {
    const ethRate = () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-xEDfyZh1gVhZ5LFCEuzwUW6M",
        },
      };

      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&x_cg_demo_api_key=CG-xEDfyZh1gVhZ5LFCEuzwUW6M";

      try {
        if (!balanceLoading) {
          fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              setRate(res.ethereum.usd);
              setLoading(false);
            });
        }
      } catch (error) {
        console.error(error);
      }
    };

    ethRate();

    const interval = setInterval(() => {
      ethRate();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [balanceLoading]);

  return (
    <div className="flex flex-col items-start gap-2 p-4 mt-4">
      <p className="text-xs font-medium text-gray-600">Wallet Balance 💳</p>
      {account ? (
        <p className="text-4xl font-semibold inline-flex items-center gap-2">
          {loading
            ? "..."
            : "$" +
              (Number(formatEther(balance ?? BigInt(0))) * (rate ?? 0)).toFixed(
                2
              )}
          <small className="text-xs text-muted-foreground">
            <span className="bg-green-200/30 px-2 py-1 rounded-3xl text-xs text-green-800 mr-1 font-normal">
              +2.5%
            </span>
            vs last week
          </small>
        </p>
      ) : (
        <p className="text-4xl font-semibold inline-flex items-center gap-2">
          $0
          <small className="text-xs text-muted-foreground">
            <span className="bg-green-200/30 px-2 py-1 rounded-3xl text-xs text-green-800 mr-1 font-normal">
              --%
            </span>
            vs last week
          </small>
        </p>
      )}
      <div className="flex items-center gap-2 mt-4">
        <DepositModal />
        <WithdrawModal />
        <LoadingModal isOpen={loading || balanceLoading} onClose={() => {}} />
      </div>
    </div>
  );
};

export default UserBalanceCard;
