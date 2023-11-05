"use client";
import { useAtom } from "jotai";
import { WalletAddress } from "@/atoms/userInfo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import NavBar from "@/components/nav-bar";
import PageOne from "@/components/page-one";

export default function Home() {
  return (
    <main className="w-screen">
      <NavBar />
      <PageOne />
    </main>
  );
}
