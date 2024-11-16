import { Button } from "../ui/button"
import { Input } from "../ui/input"

const NewsletterForm = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-3 text-black">
                <h3 className="text-3xl font-medium tracking-tighter">Newsletter</h3>
                <small className="pl-3">Sign up to our Newsletter to get key insights daily</small>
                <div className="relative flex flex-col items-center gap-5">
                    <Input type="email" placeholder="Enter Your Email" className="bg-transparent py-2 pl-4 placeholder:text-black rounded-[70px] h-16 flex-grow border-2 border-black caret-black w-[40em]" />
                    <Button type="submit" className="ml-1 sm:ml-3 bg-black text-white rounded-3xl h-12 flex items-center justify-center px-6">Subscribe</Button>
                </div>
            </div>
        </>
    )
}

export default NewsletterForm