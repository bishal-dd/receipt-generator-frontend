"use client";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/src/components/organisms/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import Modals from "@/src/components/organisms/Modal/Modals";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ClerkProvider>
        <RecoilRoot>
          <Navbar />
          {children}
          <Modals />
        </RecoilRoot>
      </ClerkProvider>
    </ChakraProvider>
  );
}
