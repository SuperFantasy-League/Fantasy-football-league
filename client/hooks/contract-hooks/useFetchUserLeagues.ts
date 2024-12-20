import { getContract, defineChain } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { client } from "@/lib/client";
import { useActiveAccount } from "thirdweb/react";
import { liskSepolia } from "@/lib/chain";
// import { contractAddress } from "@/lib/address";

const contract = getContract({
    client,
    address: "0x1C2E88d6Bc5099e864047d3685b2979AF3188dE3",
    chain: liskSepolia
});

const UseFetchUserLeagues = () => {

    const account = useActiveAccount();

    const { data: leagues, isLoading: leaguesLoading } = useReadContract({
        contract,
        method: "function getUserLeagues(address _owner) external view returns (uint256[] memory)",
        params: [account?.address || ""]
    });

    return {
        leagues,
        leaguesLoading
    };
};

export default UseFetchUserLeagues;
