import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" flex justify-center place-items-center">
      <Image
        src={"/ComingSoon.png"}
        alt={"coming soon"}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
  );
};

export default page;
