import Link from "next/link";

const GetStartedButton = () => {
  return (
    <>
      <Link
        href="/dashboard"
        className="bg-black text-white rounded-[50px] px-8 py-4 text-xl inline-flex gap-5 items-center border border-gray-500 shadow-sm-lg"
      >
        <div className="inline-flex items-center">
          <span className="w-4 h-4 border border-white animate-pulse delay-300 rounded-full bg-yellow-300"></span>
          <span className="w-4 h-4 border border-white animate-pulse delay-500 rounded-full bg-pink-300 -ml-2"></span>
          <span className="w-4 h-4 border border-white animate-pulse delay-700 rounded-full bg-blue-300 -ml-2"></span>
        </div>
        Go to App
      </Link>
    </>
  );
};

export default GetStartedButton;
