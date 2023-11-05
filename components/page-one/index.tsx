"use client";
import { useAtom } from "jotai";
import { WalletAddress } from "@/atoms/userInfo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { Carousel } from "antd";
import MintBox, { MINT_TYPE } from "./mint-box";
import "./index.css";

export default function PageOne() {
  return (
    <div className="page1-bg h-screen min-h-[720px] w-screen bg-cover flex justify-center items-center text-white">
      <div className="">
        <Carousel className="w-[750px] p-[50px]">
          <MintBox type={MINT_TYPE.ByteDance} />
          <MintBox type={MINT_TYPE.Tencent} />
          <MintBox type={MINT_TYPE.Ali} />
        </Carousel>
      </div>
    </div>
  );
}
