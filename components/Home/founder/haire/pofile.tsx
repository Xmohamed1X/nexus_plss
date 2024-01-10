import Image from "next/image";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoStarSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { TbCurrencySolana } from "react-icons/tb";

export default function Profile() {
  const img =
    "https://media.discordapp.net/attachments/1085293900706627595/1162185105696116826/Ellipse_1.png?ex=65a9c239&is=65974d39&hm=6a77d8451e8ca2161c281c277a67fc99170ff3ea97d36f513597e736c8b426d6&=&format=webp&quality=lossless&width=465&height=465";
  const solanaIcon =
    "https://img.icons8.com/external-black-fill-lafs/64/external-Solana-cryptocurrency-black-fill-lafs.png";
  const portfolioImage =
    "https://s3-alpha-sig.figma.com/img/e140/8f72/112dca913b2922398c157216f460f4a2?Expires=1693785600&Signature=cJt4eVP7iH9ZUxEZyhKQ0APCiaLcO3Vst5avQ1Iic6TXWodOVu4miendtI8W~mwNdpVUGdoapFofrU0XP-dwZAtdgZPL-jkuCKF3RlIRJzlqBTfMSXCkY1HuTlmzi-9ljASTrY6mLvCT-KqsPqRq2j0dKTdzNZD2OfnBxZ97BMs7E1JrJorLNRWswZZ-WMnKxJxVf5GrpCtcOIJyZ2XWrAxHWW6nC8s70zecJ6UPw3x0JHkVkmO-U31IKOQ-mbEgaiFgN887k0uJua20YFrB2zWajetRfKZSEEXH62Y86mZD~RIqI-LcljoBX9ZHgwH8lGzGU9CDswOpnmwY4PFYBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const workImage =
    "https://s3-alpha-sig.figma.com/img/8c77/db9b/1bd6ae82b38daaf0abae070b391ed1e1?Expires=1693785600&Signature=fuZlHy6x4I5-bCv3Mvpe-icAKSvsOLP0r3Q2~MZ07GXbXDzPs237WoSnC0MJHZTRbpNu~Qu6UxSBa5zSnS4uVIknFK1bRXZZq-QmKm0dmQ~a4r238nAGe29WNDbQvlrCPb44iZ7a6iNErrSkuPbi-7ZukjvsOxfFbYNapPE3nB~OiUfzL-V97tGVgPbUHYZOgNglatkWvKbRp2NrItzHl-IYupEC~TsEAV0VC7kBZX62H9MHtBMjYPULR1BIj9wpKH3Rbk1yMb1V1x-t~i3RGtnsYyGiGT9SvToke2lGjjn9rd5AWywNelI5cVGdG0G7uQnfQKmoeMBSQsWFsDIe9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const router = useRouter();
  return (
    <div className="w-[95vw] md:w-[65vw] mx-auto text-black pt-[3vw] pb-[5vw]">
      <div className="flex gap-x-[1vw] items-center">
        <div>
          <Image
            src={img}
            width={2000}
            height={2000}
            alt=""
            className="w-[30vw] md:w-[16vw] rounded-full object-cover object-center"
          />
        </div>
        <div className="border border-black rounded-[1vw] shadow-md p-[2vw]">
          <div className="text-[4.4vw] md:text-[3vw] fontPopSemibold">
            Zetsu | The Shaman King
          </div>
          <div className="text-[3vw] md:text-[2vw] flex items-center gap-x-[1vw]">
            <div>Content Writer</div>
            <div className="px-[1.5vw] py-[0.4vw] text-[2vw] md:text-[0.8vw] bg-[#1DA1F2] fontPopSemibold">
              Expert
            </div>
          </div>
          <div className="flex items-center text-[3vw] md:text-[1.5vw]">
            <div>4.6</div>
            <IoStarSharp className="text-yellow-400 " />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[4vw] md:text-[2vw] flex items-center gap-x-[1vw] mt-[1vw]">
              <Icon>
                <IoLogoLinkedin />
              </Icon>
              <Icon>
                <FaTwitter />
              </Icon>
              <Icon>
                <GrLanguage />
              </Icon>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="text-[2.5vw] md:text-[1vw] font-semibold"
            >
              Read Cover Letter!
            </motion.button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[1vw]">
        <div>
          <div className="text-[4vw] md:text-[1.4vw] fontPopSemibold">
            Chains
          </div>
          <div className="mt-[0.3vw] border text-[6vw] md:text-[3vw] flex items-center border-black rounded-[0.6vw] px-[0.7vw] py-[0.2vw] gap-x-[0.2vw]">
            <TbCurrencySolana />
            <TbCurrencySolana />
            <TbCurrencySolana />
          </div>
        </div>
        <div className="flex flex-col items-start text-[2.5vw] md:text-[1.4vw]">
          <div className="fontPopSemibold text-[4vw] md:text-[1.4vw]">Rate</div>
          <div className="p-[1vw] border border-black shadow-md rounded-[0.5vw]">
            $50 / week / Open to negotiations
          </div>
        </div>
      </div>
      <div className="mt-[4vw] md:mt-[3vw]">
        <div className="flex justify-between items-center">
          <div className="fontPopSemibold text-[4vw] md:text-[1.4vw]">
            Profile Overview
          </div>
          <div className="flex gap-x-[3vw] md:gap-x-[1vw]">
            <Button1>Contact</Button1>
            <Button1>Review</Button1>
          </div>
        </div>
        <div className="mt-[3vw] md:mt-[1vw] w-full p-[3vw] md:p-[2vw] rounded-[0.4vw] border border-black text-[3vw] md:text-[1.2vw] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="mt-[3vw] text-[3.5vw] md:text-[1.7vw] w-full text-start border-[0.12vw] border-black rounded-[0.4vw] p-[2.4vw] md:p-[1vw] text-black font-semibold"
        >
          View Resume
        </motion.button>
      </div>
      <div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="mt-[3vw] text-[3.5vw] md:text-[1.7vw] w-full text-start border-[0.12vw] border-black rounded-[0.4vw] p-[2.4vw] md:p-[1vw] text-black font-semibold"
        >
          View Porfolio
        </motion.button>
      </div>
      <div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="mt-[3vw] text-[3.5vw] md:text-[1.7vw] w-full text-start border-[0.12vw] border-black rounded-[0.4vw] p-[2.4vw] md:p-[1vw] text-black font-semibold"
        >
          View Nexus Job History
        </motion.button>
      </div>

      <div className="mt-[3vw] text-[3vw] md:text-[1.5vw]">
        <div className="fontPopSemibold">Categories</div>
        <input
          type="text"
          className="outline-none px-[2vw] mt-[1vw] border-[0.12vw] border-black rounded-[0.4vw] w-full py-[1vw] focus:border-red-500 focus:scale-[101%] transition-all"
        />
      </div>
      <div className="mt-[3vw] text-[3vw] md:text-[1.5vw]">
        <div className="fontPopSemibold">Secondary Roles</div>
        <input
          type="text"
          className="outline-none px-[2vw] mt-[1vw] border-[0.12vw] border-black rounded-[0.4vw] w-full py-[1vw] focus:border-red-500 focus:scale-[101%] transition-all"
        />
      </div>
      <div className="mt-[3vw] text-[3vw] md:text-[1.5vw]">
        <div className="fontPopSemibold">
          Others (Case Studes, Testimonials)
        </div>
        <textarea
          rows={2}
          className="outline-none px-[2vw] mt-[1vw] border-[0.12vw] border-black rounded-[0.4vw] w-full py-[1vw] focus:border-red-500 focus:scale-[101%] transition-all"
        />
      </div>
      <div className="mt-[3vw] text-[3vw] md:text-[1.5vw]">
        <div className="fontPopSemibold">Reviews</div>
        <textarea
          rows={3}
          className="outline-none px-[2vw] mt-[1vw] border-[0.12vw] border-black rounded-[0.4vw] w-full py-[1vw] focus:border-red-500 focus:scale-[101%] transition-all"
        />
      </div>
      <div className="mt-[6vw] md:mt-[4vw] flex justify-center gap-x-[4vw] md:gap-x-[2vw]">
        <Button3>Add to watchlist</Button3>
        <Button2 onClick={() => router.push("/founder/haire/hire")}>
          Hire
        </Button2>
      </div>
    </div>
  );
}

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Icon({ children }: IconProps) {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  );
}

export function Button1({ children }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.5vw 2vw",
        borderRadius: "0.4vw",
        fontSize: "1vw",
        color: "#000",
        background: "#00ff47",
        textTransform: "none",
        ":hover": {
          background: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "3vw",
        },
      }}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
      variant="contained"
    >
      {children}
    </Button>
  );
}

export function Button2({ children, onClick }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.7vw 2vw",
        borderRadius: "0.6vw",
        fontSize: "1.1vw",
        color: "#000",
        background: "#00ff47",
        textTransform: "none",
        ":hover": {
          background: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "3vw",
        },
      }}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
export function Button3({ children, onClick }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.7vw 2vw",
        borderRadius: "0.6vw",
        fontSize: "1.1vw",
        color: "#000",
        background: "#fff",
        textTransform: "none",
        "@media (max-width:767px)": {
          fontSize: "3vw",
        },
      }}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
