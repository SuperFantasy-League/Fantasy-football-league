"use client";
import {
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
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/lib/client";
import { defineChain } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import UseFetchBalance from "@/hooks/contract-hooks/useFetchBalance";
import { formatEther, parseEther } from "viem";
import { useEffect, useState } from "react";

const liskSepolia = defineChain(4202);

const contract = getContract({
  address: "0x47F5fa8f71A6E2672A6E3596d153fb0FA1e5b0D1",
  chain: liskSepolia,
  client,
});

const FormSchema = z.object({
  amount: z.number().positive().gt(0, {
    message: "Deposit amount must be a positive number greater than 0.",
  }),
});

const WithdrawModal = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const { balance, balanceLoading } = UseFetchBalance();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const {
    mutate: sendTx,
    data: transactionResult,
    isPending: withdrawing,
    isSuccess: isWithdrawSuccess,
    isError: withdrawError,
  } = useSendTransaction();

  if (transactionResult) {
    console.log("transaction result", transactionResult);
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const transaction = prepareContractCall({
      contract,
      method: "function withdraw(uint _amount) external",
      // params: [BigInt(data.amount)],
      params: [parseEther(data.amount.toString())],
    });
    sendTx(transaction);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data.amount, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  useEffect(() => {
    if (isWithdrawSuccess) {
      setOpen(false);
      form.setValue("amount", 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWithdrawSuccess]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            onClick={() => setOpen(true)}
            className="bg-red-600 rounded-3xl text-sm shadow"
          >
            Withdraw
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Withdraw</DialogTitle>
            <DialogDescription>Withdraw Funds</DialogDescription>
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
                    <FormLabel>Amount to withdraw</FormLabel>
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
                {balanceLoading
                  ? "Fetching balance ..."
                  : formatEther(balance ?? BigInt(0))}
              </FormDescription>
              <Button type="submit">
                {withdrawing ? "Withdrawing..." : "Submit"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WithdrawModal;
