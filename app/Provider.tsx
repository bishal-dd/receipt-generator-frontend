"use client";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/src/components/organisms/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ClerkProvider>
        <Navbar />
        {children}
      </ClerkProvider>
    </ChakraProvider>
  );
}
