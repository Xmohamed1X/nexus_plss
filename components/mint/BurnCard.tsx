import { Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Message from "./Message";

export default function BurnCard({ token, minting }: any) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="flex flex-col items-center">
      {/* <div className=""> */}
      <div className="w-full flex justify-center">
        <Image
          className="w-[65%] h-[160px] md:h-[130px] object-cover object-center rounded-lg"
          src={token.image}
          width={1000}
          height={200}
          loading="lazy"
          alt=""
        />
      </div>
      {/* </div> */}
      <div>
        {token.name}
      </div>
      <div className="mt-[3vw] md:mt-[1vw] flex justify-center">
        <Button
          className="!text-black !bg-[#00ff47] !rounded-[0.6vw] !text-[4vw] md:!text-[1.2vw] !px-[6vw] md:!px-[3vw] !font-semibold "
          style={{ textTransform: "none" }}
          onClick={() =>
            minting(token.id)
            //  setShowMessage(true)
          }
        >
          Burn
        </Button>
      </div>
      {showMessage && <Message />}
    </div>
  );
}
