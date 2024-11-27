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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
// import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateLeague from "@/hooks/contract-hooks/useCreateLeague";

const FormSchema = z.object({
  leagueName: z.string().min(2, {
    message: "League name must be at least 2 characters.",
  }),
  wagerAmount: z.number().positive(),
  wagerDuration: z.string().min(1, {
    message: "Wager duration is required.",
  }),
});

const CreateLeagueModal = () => {
  // const { toast } = useToast();
  const { createLeague, isPending } = useCreateLeague();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      leagueName: "",
      wagerAmount: 0,
      wagerDuration: "weekly",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    createLeague({
      name: data.leagueName,
      entryFee: data.wagerAmount,
      startTime: new Date().getTime(),
      endTime: new Date().getTime() * 100,
    });
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  console.log(JSON.stringify(form.formState.errors));

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>Create a League</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a League</DialogTitle>
            <DialogDescription>
              Your league name should be a maximum of 20 characters
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="leagueName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>League Name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="Enter a League Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wagerAmount"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Wager Amount</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="Enter a Wager Amount"
                        {...field}
                        type="number"
                        onChange={(e) => {
                          form.setValue("wagerAmount", Number(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wagerDuration"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Rewards Frequency</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue="weekly"
                        onOpenChange={() => field.onChange(field.value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select rewards frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="seasonal">Seasonal</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                {isPending ? "Creating..." : "Submit"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateLeagueModal;
