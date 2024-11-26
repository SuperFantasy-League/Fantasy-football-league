import { getContract, defineChain } from "thirdweb";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "@/lib/client";

const liskSepolia = defineChain(4202);

const contract = getContract({
  client,
  address: "0x47F5fa8f71A6E2672A6E3596d153fb0FA1e5b0D1",
  chain: liskSepolia,
});

const UseFetchBalance = () => {
  const account = useActiveAccount();

  const { data: balance, isLoading: balanceLoading } = useReadContract({
    contract,
    method:
      "function getBalance(address _user) external view returns (uint256)",
    params: [account?.address || ""],
  });

  return {
    balance,
    balanceLoading,
  };
};

export default UseFetchBalance;
