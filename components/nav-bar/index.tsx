"use client";
import { useAtom } from "jotai";
import { WalletAddress } from "@/atoms/userInfo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "./index.css";

export default function NavBar() {
  const { address, isConnected } = useAccount();

  const [walletAddress, setWalletAddress] = useAtom(WalletAddress);

  useEffect(() => {
    if (isConnected && address) {
      setWalletAddress(address?.toString());
    } else {
      setWalletAddress("");
    }
  }, [isConnected]);

  return (
    <div className="nav-bar fixed left-0 w-full p-[20px] flex justify-between items-center h-[80px] text-white">
      {/* 左侧 logo 区 */}

      <Image className="h-[20px] w-auto" src={logo} alt="avatar" />
      {/* 右侧 控件 区 */}
      <div className="flex items-center">
        <div className="mr-[60px] px-5 cursor-pointer">MINT</div>
        <div className="mr-[60px] px-5 cursor-pointer">ABOUT</div>
        <ConnectButton
          label="链接钱包"
          showBalance={false}
          chainStatus="none"
        />
      </div>
    </div>
  );
}
