import { useState, useEffect } from 'react';
import { contractAddress } from "@/lib/address";
import { Card, CardContent, CardHeader } from "../ui/card"
import UseFetchUserTransactions from "@/hooks/contract-hooks/useFetchUserTransactions"
import Link from "next/link";
import { getContract, prepareEvent } from "thirdweb";
import { useContractEvents } from "thirdweb/react";
import { liskSepolia } from "@/lib/chain";
import { client } from "@/lib/client";
import useEthRate from '@/hooks/useCurrencyConverter';
import { formatEther } from 'viem';

// First, add the Transaction type
type Transaction = {
  txHash: string;
  id: bigint;
  txType: number;
  value: bigint;
  timestamp: bigint;
  sender: string;
  receiver: string;
  leagueId: bigint;
};

const RecentTx = () => {
  const contract = getContract({
    address: contractAddress,
    chain: liskSepolia,
    client,
  });

  const { rate, loading } = useEthRate();
  const { transactions, txLoading } = UseFetchUserTransactions();
  const [localTransactions, setLocalTransactions] = useState<Transaction[]>([]);

  const preparedEvent = prepareEvent({
    signature: "event TransactionCreated(bytes32 txHash, uint256 indexed id, uint256 indexed txType, uint256 value, address indexed sender, address receiver, uint256 leagueId)",
  });

  const { data: events } = useContractEvents({
    contract,
    events: [preparedEvent],
  });

  // Initialize local transactions when fetched
  useEffect(() => {
    if (transactions) {
      setLocalTransactions([...transactions] as Transaction[]);
    }
  }, [transactions]);

  // Update local transactions when new event is received
  useEffect(() => {
    if (events?.[0]) {
      const event = events[0];
      const newTransaction = {
        txHash: event.args.txHash,
        id: event.args.id,
        txType: event.args.txType,
        value: event.args.value,
        timestamp: BigInt(Math.floor(Date.now() / 1000)),
        sender: event.args.sender,
        receiver: event.args.receiver,
        leagueId: event.args.leagueId
      };
      setLocalTransactions(prev => [...prev, newTransaction] as Transaction[]);
    }
  }, [events]);

  if (txLoading) return <p>Loading transactions...</p>;

  const renderTransactionType = (txType: number) => {
    switch (txType) {
      case 1: return { text: 'Deposit', className: 'bg-green-200/40 text-green-800 border-green-500/40' };
      case 2: return { text: 'Withdraw', className: 'bg-red-200/40 text-red-800 border-red-500/40' };
      case 3: return { text: 'Stake', className: 'bg-blue-200/40 text-blue-800 border-blue-500/40' };
      default: return { text: 'Unknown', className: 'bg-gray-200/40 text-gray-800 border-gray-500/40' };
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            Recent Transactions
            <div className="h-4 w-4 flex justify-center items-center rounded-xl">
              ...
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {localTransactions?.map((tx, index) => {
              const { text: txTypeText, className: txTypeClassName } = renderTransactionType(tx.txType);
              return (
                <li key={tx.id}>
                  <div className="flex justify-between items-center">
                    <div className="inline-flex items-center gap-4">
                      <p className={`w-16 py-1 text-center ${txTypeClassName} text-xs rounded-2xl border`}>
                        {txTypeText}
                      </p>
                      <div className="flex flex-col items-start gap-0.5 text-xs">
                        <Link href={`https://sepolia-blockscout.lisk.com/tx/${tx.txHash}`} target="_blank" rel="noopener noreferrer">
                          <span className="cursor-pointer hover:underline">
                            {tx.txHash.slice(0, 10)}...{tx.txHash.slice(-4)} ↗️
                          </span>
                        </Link>
                        {/* {tx.txHash.slice(0, 10)}...{tx.txHash.slice(-4)}↗️ */}
                        <span>{formatDate(Number(tx.timestamp))}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium">
                      {
                        loading ? "..." :
                          "$" + (Number(formatEther(tx.value)) * (rate ?? 0)).toFixed(2)
                      }
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </>
  )
}

export default RecentTx