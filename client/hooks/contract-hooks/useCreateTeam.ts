import { useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { client } from "@/lib/client";
import { liskSepolia } from "@/lib/chain";

// Move contract definition outside the hook since it's static

const useCreateTeam = () => {
  const contract = getContract({
    client,
    address: "0x2Ddd626E0acd6d80783582CbB6B8d8d374eAD956",
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
