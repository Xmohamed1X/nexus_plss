import Head from "next/head";
import React from "react";
import { Button } from "@mui/material";

export default function settings() {
  return (
    <div className="w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Settings</title>
      </Head>
      <div className="w-[45vw] mx-auto">
        <div className="mb-[2vw]">
          <div className="text-[2vw] font-semibold text-black">
            Link Discord
          </div>
          <input
            type="text"
            className="outline-none px-[2vw] py-[1vw] w-full rounded-[0.7vw] text-black/80 border-[0.13vw] border-black focus:border-red-500 focus:scale-[101%] transition-all"
            placeholder="https://example.com"
          />
        </div>
        <div className="mb-[2vw]">
          <div className="text-[2vw] font-semibold text-black">
            Link Website
          </div>
          <input
            type="text"
            className="outline-none px-[2vw] py-[1vw] w-full rounded-[0.7vw] text-black/80 border-[0.13vw] border-black focus:border-red-500 focus:scale-[101%] transition-all"
            placeholder="https://example.com"
          />
        </div>
        <div className="mb-[2vw]">
          <div className="text-[2vw] font-semibold text-black">
            Link Twitter
          </div>
          <input
            type="text"
            className="outline-none px-[2vw] py-[1vw] w-full rounded-[0.7vw] text-black/80 border-[0.13vw] border-black focus:border-red-500 focus:scale-[101%] transition-all"
            placeholder="https://example.com"
          />
        </div>
        <div className="mb-[2vw]">
          <div className="text-[2vw] font-semibold text-black">Link Thread</div>
          <input
            type="text"
            className="outline-none px-[2vw] py-[1vw] w-full rounded-[0.7vw] text-black/80 border-[0.13vw] border-black focus:border-red-500 focus:scale-[101%] transition-all"
            placeholder="https://example.com"
          />
        </div>
      </div>
      <div className="mt-[2vw] w-[60vw] mx-auto text-black">
        <div className="text-[2vw] font-semibold">Wallets</div>
        <div className="px-[2vw] mt-[1vw] grid grid-cols-3 gap-[2vw]">
          <WalletButton>Add Aptos</WalletButton>
          <WalletButton>Add Solana</WalletButton>
          <WalletButton>Add Ethereum</WalletButton>
          <WalletButton>Add Polygon</WalletButton>
          <WalletButton>Add Sui</WalletButton>
          <WalletButton>Add Cardano</WalletButton>
          <WalletButton>Add BNB</WalletButton>
        </div>
        {/* Connected Wallets */}
        <div className="text-[1.4vw] mt-[5vw]">
          <div className="font-semibold">Your Solana Wallet</div>
          <div className="mt-[1vw] flex gap-x-[2vw] items-center">
            <div>SJWVROW4658G2U9HG47839FH</div>
            <WalletButtonUnlink>Unlink Wallet</WalletButtonUnlink>
          </div>
        </div>
        <div className="text-[1.4vw] mt-[2vw]">
          <div className="font-semibold">Your Solana Aptos</div>
          <div className="mt-[1vw] flex gap-x-[2vw] items-center">
            <div>0xewubf348f373429gh842984y2</div>
            <WalletButtonUnlink>Unlink Wallet</WalletButtonUnlink>
          </div>
        </div>
      </div>
    </div>
  );
}

interface WalletButtonType {
  children: string;
}

export function WalletButton({ children }: WalletButtonType) {
  return (
    <Button
      sx={{
        fontSize: "1.4vw",
        background: "#000",
        color: "#fff",
        borderRadius: "0.7vw",
        textTransform: "none",
        padding: "1.2vw 3vw",
        fontWeight: 600,
        ":hover": {
          background: "#000",
        },
      }}
      className="bg-[#000] hover:bg-[#000]"
    >
      {children}
    </Button>
  );
}
export function WalletButtonUnlink({ children }: WalletButtonType) {
  return (
    <Button
      sx={{
        fontSize: "0.8vw",
        background: "#FF2D2D",
        color: "#fff",
        borderRadius: "0.5vw",
        textTransform: "none",
        padding: "1vw 2.4vw",
        fontWeight: 400,
        ":hover": {
          background: "#FF2D2D",
        },
      }}
      className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
    >
      {children}
    </Button>
  );
}