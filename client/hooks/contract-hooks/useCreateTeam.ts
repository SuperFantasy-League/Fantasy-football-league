import { useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { client } from "@/lib/client";
import { liskSepolia } from "@/lib/chain";

const useCreateTeam = () => {
  const contract = getContract({
    client,
    address: "0x1C2E88d6Bc5099e864047d3685b2979AF3188dE3",
    chain: liskSepolia,
  });
  // Get the sendTransaction hook
  const {
    mutateAsync: sendTx,
    isPending,
    isSuccess,
    error,
    data,
  } = useSendTransaction();

  // Function to create a team
  const createTeam = (playerIds: bigint[]) => {
    // try {
    const transaction = prepareContractCall({
      contract,
      method: "function createTeam(uint256[] calldata _playerIds) external", // Adjust this to match your actual contract function
      params: [playerIds],
    });

    sendTx(transaction).then((res) => {
      console.log(res);
    });
    // } catch (err) {
    //   console.error("Error creating team:", err);
    //   throw err;
    // }
  };

  return {
    createTeam,
    isPending,
    isSuccess,
    error,
    transactionResult: data,
    sendTx,
    prepareContractCall,
    contract,
  };
};

export default useCreateTeam;
