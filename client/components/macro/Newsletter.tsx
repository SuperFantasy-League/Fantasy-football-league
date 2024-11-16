import Image from "next/image"
import NewsletterForm from "../micro/NewsletterForm"

const Newsletter = () => {
    return (
        <>
            <div className="grid">
                <hr />
                <div className="flex justify-between items-center pt-6 mb-10">
                    <Image
                        src={'eth.svg'}
                        alt="ethereum logo"
                        width={30}
                        height={30}
                    />
                    <div className="inline-flex items-center gap-2 text-3xl font-medium tracking-tighter">
                        <span className="text-yellow-500">. Play</span>
                        <span className="text-pink-500">Trade</span>
                        <span className="text-blue-500">Win</span>
                        <svg version="1.1" className="w-8 h-8 fill-blue-900" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23 23" xmlSpace="preserve">
                            <path d="M11.2,17.6c-3.3,0-6-2.4-6.4-5.7l1.5-0.2c0.3,2.5,2.4,4.3,4.9,4.3s4.6-1.9,4.9-4.3l1.5,0.2C17.2,15.2,14.5,17.6,11.2,17.6z" />
                            <path d="M11.2,22.2c-6,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S17.2,22.2,11.2,22.2z M11.2,1.8C6,1.8,1.8,6,1.8,11.2&#10;&#9;s4.2,9.5,9.5,9.5s9.5-4.2,9.5-9.5S16.4,1.8,11.2,1.8z" />
                            <path d="M6,9.6c-0.3,0-0.6-0.1-0.8-0.4C4.9,9.1,4.8,8.8,4.8,8.4c0-0.1,0-0.3,0.1-0.4C5,7.9,5,7.7,5.2,7.6c0.4-0.4,1.2-0.4,1.7,0&#10;&#9;C6.9,7.7,7,7.9,7.1,8c0.1,0.1,0.1,0.3,0.1,0.4c0,0.3-0.1,0.6-0.3,0.8C6.6,9.5,6.3,9.6,6,9.6z" />
                            <path d="M16.4,9.6c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.3,0.2-0.4&#10;&#9;c0.4-0.4,1.2-0.4,1.7,0c0.1,0.1,0.2,0.2,0.2,0.4c0.1,0.1,0.1,0.3,0.1,0.4c0,0.3-0.1,0.6-0.4,0.8C17,9.5,16.7,9.6,16.4,9.6z" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-9xl font-medium w-full text-left font-[family-name:var(--font-geist-sans)] tracking-tighter mb-20">
                    Fantasy Football, reinvented on the blockchain.
                </h1>
                <NewsletterForm />
            </div>
        </>
    )
}

export default Newsletter