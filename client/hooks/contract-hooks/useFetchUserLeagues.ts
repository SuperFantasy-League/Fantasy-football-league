import { getContract, defineChain } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { client } from "@/lib/client";
import { useActiveAccount } from "thirdweb/react";
import { liskSepolia } from "@/lib/chain";
import { contractAddress } from "@/lib/address";

const contract = getContract({
  client,
  address: contractAddress,
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
