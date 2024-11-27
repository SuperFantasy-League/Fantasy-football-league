import { getContract } from "thirdweb";
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

const UseFetchUserTeams = () => {

    const account = useActiveAccount();

    const { data: teams, isLoading: teamsLoading } = useReadContract({
        contract,
        method: "function getUserTeams(address _owner) external view returns (uint256[] memory)",
        params: [account?.address || ""]
    });

    return {
        teams,
        teamsLoading
    };
};

export default UseFetchUserTeams;
