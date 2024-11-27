import { getContract, defineChain } from "thirdweb";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "@/lib/client";
import { liskSepolia } from "@/lib/chain";
import { contractAddress } from "@/lib/address";


const contract = getContract({
  client,
  address: contractAddress,
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
