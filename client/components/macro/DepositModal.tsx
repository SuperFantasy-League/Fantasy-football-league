"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWalletBalance } from "thirdweb/react";
import { client } from "@/lib/client";
import { useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { parseEther } from "viem";
import { useEffect, useState } from "react";
import { liskSepolia } from "@/lib/chain";
import { contractAddress } from "@/lib/address";

const contract = getContract({
  address: contractAddress,
  chain: liskSepolia,
  client,
});

const FormSchema = z.object({
  amount: z.number().positive().gt(0, {
    message: "Deposit amount must be a positive number greater than 0.",
  }),
});

const DepositModal = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const {
    mutate: sendTx,
    data: transactionResult,
    isPending: depositing,
    isSuccess,
    // isError: depositError,
  } = useSendTransaction();

  if (transactionResult) {
    console.log("transaction result", transactionResult);
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const transaction = prepareContractCall({
      contract,
      method: "function deposit() external payable",
      // value: BigInt(Number(data.amount)),
      value: parseEther(data.amount.toString()),
      params: [],
    });
    sendTx(transaction);
    toast({
      title: "You are making a deposit of this amount:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data.amount, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  const { data } = useWalletBalance({
    client,
    address: undefined,
    chain: liskSepolia,
  });

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      form.setValue("amount", 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            onClick={() => setOpen(true)}
            className="bg-green-600 shadow rounded-3xl text-sm"
          >
            Deposit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deposit</DialogTitle>
            <DialogDescription>
              Deposit into your account to start playing
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Amount to deposit</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="Enter an amount to deposit"
                        type="number"
                        {...field}
                        onChange={(e) => {
                          form.setValue("amount", Number(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormDescription>
                balance:{" "}
                {data ? (
                  <>
                    {data.displayValue} {data.symbol}
                  </>
                ) : (
                  "Loading..."
                )}
              </FormDescription>
              <Button type="submit">
                {depositing ? "Depositing..." : "Submit"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DepositModal;
