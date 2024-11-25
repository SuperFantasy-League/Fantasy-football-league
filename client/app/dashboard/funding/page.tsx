import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
        <section className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col items-center gap-4">
                <Image
                    src={'/bolt.svg'}
                    alt="bolt icon for coming soon"
                    width={250}
                    height={250}
                />
                <p className="text-3xl fo tracking-tighter">
                    Wallet is Unavailable at this time, <br /> check out the fantasy Page
                </p>
                <Link href={'/fantasy'}>
                    <Button className="w-32 h-10">
                        Fantasy
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default page