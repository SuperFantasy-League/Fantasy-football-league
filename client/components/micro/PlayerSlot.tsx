import React from "react";
import Image from "next/image";

const PlayerSlot = () => {
  return (
    <div className=" w-full grid grid-cols-[auto,auto,1fr,auto,auto] gap-4 border-t-[1px] border-b-[1px] p-2 border-gray-300 ">
      <div className="flex justify-center">
        <Image
          src={"/info-svgrepo-com.svg"}
          alt="team logos"
          width={15}
          height={15}
        />
      </div>
      <div>
        <Image src={"/celtic.png"} alt="team logos" width={50} height={50} />
      </div>
      <div className="flex-1 flex-col justify-center items-center">
        <div className="font-bold justify-center place-items-center px-2">
          Virgil
        </div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-sm p-1">LIV</div>
          <div className="text-gray-500 text-sm p-1">DEF</div>
        </div>
      </div>

      <div className="flex justify-center place-items-center p-2 border-l border-gray-300">
        6.3
      </div>
      <div className="flex justify-center place-items-center p-2 border-l border-gray-300">
        56
      </div>
    </div>
  );
};

export default PlayerSlot;
