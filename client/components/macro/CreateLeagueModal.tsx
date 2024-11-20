import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
    leagueName: z.string().min(2, {
        message: "League name must be at least 2 characters.",
    }),
    wagerAmount: z.number().positive().gt(0, {
        message: "Wager amount must be a positive number greater than 0.",
    }),
})

const CreateLeagueModal = () => {

    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            leagueName: "",
            wagerAmount: 0,
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

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
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <FormField
                                control={form.control}
                                name="leagueName"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>League Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full" placeholder="Enter a League Name" {...field} />
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
                                            <Input className="w-full" placeholder="Enter a Wager Amount" {...field} />
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
                                        <FormLabel>Rewards Frequency</FormLabel>
                                        <FormControl>
                                            <Select>
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
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CreateLeagueModal