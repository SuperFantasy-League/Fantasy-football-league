import { getContract, defineChain } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { client } from "@/lib/client";
import { useActiveAccount } from "thirdweb/react";

const liskSepolia = defineChain(4202);

const contract = getContract({
  client,
  address: "0x3391162281F237d4e96066eDfE1867b8fA92C9bb",
  chain: liskSepolia
});

const UseFetchUserLeagues = () => {

  const account = useActiveAccount();

  const { data: leagues, isLoading: leaguesLoading } = useReadContract({
    contract,
    method: "mapping(address => uint256[]) public userLeagues",
    params: [account]
  });

  return {
    leagues,
    leaguesLoading
  };
};

export default UseFetchUserLeagues;
