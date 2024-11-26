import { getContract, defineChain } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { client } from "@/lib/client";

const liskSepolia = defineChain(4202);

const contract = getContract({
  client,
  address: "0x3391162281F237d4e96066eDfE1867b8fA92C9bb",
  chain: liskSepolia
});

const UseFetchBalance = () => {

  const { data: balance, isLoading: balanceLoading } = useReadContract({
    contract,
    method: "function getBalance() external view returns (uint256)",
    params: []
  });

  return {
    balance,
    balanceLoading
  };

};

export default UseFetchBalance;
