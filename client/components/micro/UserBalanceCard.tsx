import { useActiveAccount } from "thirdweb/react";
import UseFetchBalance from "@/hooks/contract-hooks/useFetchBalance";
import DepositModal from "../macro/DepositModal";
import { formatEther } from "viem";

const UserBalanceCard = () => {
  const account = useActiveAccount();

  const { balance, balanceLoading } = UseFetchBalance();

  console.log(balance);

  return (
    <div className="flex flex-col items-start gap-2 p-4 mt-4">
      <p className="text-xs font-medium text-gray-600">Wallet Balance 💳</p>
      {account ? (
        <p className="text-4xl font-semibold inline-flex items-center gap-2">
          {balanceLoading ? "..." : "$" + formatEther(balance ?? BigInt(0))}
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
      <DepositModal />
    </div>
  );
};

export default UserBalanceCard;
