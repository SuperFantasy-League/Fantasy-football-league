import { liskSepolia } from "@/lib/chain";
import { client } from "@/lib/client";
import { getContract, prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { toast } from "../use-toast";
import { parseEther, toBigInt } from "ethers";

const useCreateLeague = () => {
  // function createLeague(
  //     string memory name,
  //     uint256 entryFee,
  //     uint256 startTime,
  //     uint256 endTime
  // ) external payable returns (address, uint256)
  const contract = getContract({
    client,
    address: "0xdA7DA915e3e87B7eeD2E4A9e66dCebb15c34C2Cb",
    chain: liskSepolia,
  });
  // Get the sendTransaction hook
  const { mutateAsync: sendTx, isPending, error, data } = useSendTransaction();

  // Function to create a team
  const createLeague = ({
    name,
    entryFee,
    startTime,
    endTime,
  }: {
    name: string;
    entryFee: number;
    startTime: number;
    endTime: number;
  }) => {
    console.log(toBigInt(parseEther(`${entryFee}`)));
    // try {
    const transaction = prepareContractCall({
      contract,
      method:
        "function createLeague(string memory name, uint256 entryFee, uint256 startTime, uint256 endTime ) external payable returns (address, uint256)", // Adjust this to match your actual contract function
      value: parseEther(entryFee.toString()),
      params: [
        name,
        toBigInt(parseEther(`${entryFee}`)),
        toBigInt(startTime),
        toBigInt(endTime),
      ],
    });

    sendTx(transaction).then((res) => {
      console.log(res);
      toast({
        description: "League created",
      });
    });
    // } catch (err) {
    //   console.error("Error creating team:", err);
    //   throw err;
    // }
  };

  return {
    createLeague,
    isPending,
    error,
    transactionResult: data,
    sendTx,
    prepareContractCall,
    contract,
  };
};

export default useCreateLeague;
