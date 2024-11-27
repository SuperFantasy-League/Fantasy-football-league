import { useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const liskSepolia = defineChain(4202);

const contract = getContract({
  client,
  address: "0x2Ddd626E0acd6d80783582CbB6B8d8d374eAD956",
  chain: liskSepolia,
});

const { mutate: sendTx, data: transactionResult } = useSendTransaction();

const onClick = () => {
  const transaction = prepareContractCall({
    contract,
    method: "function transfer(address to, uint256 value)",
    params: [to, value],
  });

  sendTx(transaction);
};
