import Image from "next/image"
import { Button } from "../ui/button"
import GetStartedButton from "../micro/GetStartedButton"

const Networks = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-20 items-center">
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-5xl font-semibold font-[family-name:var(--font-geist-sans)]">
                        Built on 5+ networks on the superchain, with core focus on <span className="text-blue-700">$lisk</span>
                    </h2>
                    <p className="text-xl font-light">By leveraging the Optimism superchain, Ace Fantasy is accessible to a wider audience, providing a scalable and maintainable solution that unlocks the full potential of blockchain gaming, ensuring a seamless experience for all users.</p>
                    <GetStartedButton />
                </div>
                <ul className="flex flex-col gap-7">
                    <li className="inline-flex items-center gap-4 text-3xl font-medium pl-48">
                        <Image
                            src={'/zora.png'}
                            alt="play"
                            width={60}
                            height={60}
                            className="rounded-full border-2 border-black"
                        />
                        Zora
                    </li>
                    <li className="inline-flex items-center gap-4 text-3xl font-medium pl-32">
                        <Image
                            src={'/base.png'}
                            alt="play"
                            width={60}
                            height={60}
                            className="rounded-full border-2 border-black"
                        />
                        Base
                    </li>
                    <li className="inline-flex items-center gap-4 text-3xl font-medium pl-14">
                        <Image
                            src={'/mode.webp'}
                            alt="play"
                            width={60}
                            height={60}
                            className="rounded-full border-2 border-black"
                        />
                        Mode
                    </li>
                    <li className="inline-flex items-center gap-4 text-4xl font-medium animate-pulse">
                        <Image
                            src={'/Lisk.png'}
                            alt="play"
                            width={60}
                            height={60}
                            className="rounded-full w-20"
                        />
                        Lisk
                    </li>
                    <li className="inline-flex items-center gap-4 text-3xl font-medium pl-14">
                        <Image
                            src={'/optimism.png'}
                            alt="play"
                            width={60}
                            height={60}
                            className="rounded-full border-2 border-black"
                        />
                        Optimism
                    </li>
                    <li className="inline-flex items-center gap-4 text-3xl font-medium pl-32">
                        <Image
                            src={'/fraxtal.webp'}
                            alt="play"
                            width={60}
                            height={60}
                            className="rounded-full border-2 border-black"
                        />
                        Fraxtal
                    </li>
                    <li className="inline-flex items-center gap-4 text-3xl font-medium pl-48">
                        <Image
                            src={'/world-chain.webp'}
                            alt="play"
                            width={60}
                            height={60}
                            className="rounded-full w-16"
                        />
                        World chain
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Networks