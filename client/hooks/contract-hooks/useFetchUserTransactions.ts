import { getContract } from "thirdweb";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "@/lib/client";
import { liskSepolia } from "@/lib/chain";
import { contractAddress } from "@/lib/address";

const contract = getContract({
  client,
  address: contractAddress,
  chain: liskSepolia,
});

const UseFetchUserTransactions = () => {

  const account = useActiveAccount();

  const { data: transactions, isLoading: txLoading } = useReadContract({
    contract,
    method: "function getUserTransactions(address _user) view returns ((bytes32 txHash, uint256 id, uint8 txType, uint256 value, uint256 timestamp, address sender, address receiver, uint256 leagueId)[])",
    params: [account?.address || ""],
  });

  return {
    transactions,
    txLoading,
  };
};

export default UseFetchUserTransactions;