"use client";
import Image from "next/image";
import txdemo from "@/assets/nft/tx.jpg";
import ttdemo from "@/assets/nft/tt.jpg";
import alidemo from "@/assets/nft/ali.jpg";
import "./index.css";

export enum MINT_TYPE {
  Tencent,
  Ali,
  ByteDance,
}

interface IMintBoxProps {
  type: MINT_TYPE;
}

const ZN_CH_MAP = {
  [MINT_TYPE.Ali]: "福报厂",
  [MINT_TYPE.ByteDance]: "心跳厂",
  [MINT_TYPE.Tencent]: "鹅厂",
};
const IMG_MAP = {
  [MINT_TYPE.Ali]: alidemo,
  [MINT_TYPE.ByteDance]: ttdemo,
  [MINT_TYPE.Tencent]: txdemo,
};

export default function MintBox(props: IMintBoxProps) {
  const { type } = props;

  return (
    <div className="flex w-[660px] text-white font-medium">
      <div className="ml-[10px] inline-block nft-shadow w-[300px] h-[300px] mr-[50px] bg-[#e5f585] flex justify-center items-center rounded-[5px]">
        <Image
          className="nft-shadow w-[260px] h-[260px] rounded-[5px]"
          src={IMG_MAP[type]}
          alt="avatar"
        />
      </div>
      <div className="inline-block w-[300px] h-[300px] flex flex-col justify-center items-center">
        <div className="text-[40px] mb-[15px]">{ZN_CH_MAP[type]} NFT</div>
        <div className="mb-[10px]">领取你的专属{ZN_CH_MAP[type]} NFT</div>
        <div className="mb-[10px]">一个钱包只能 MINT 一份</div>
        <div className="mint-btn w-[120px] text-center rounded-[5px] text-white cursor-pointer p-[15px]">
          MINT
        </div>
      </div>
    </div>
  );
}
