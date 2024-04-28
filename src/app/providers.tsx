// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider resetCSS={false} cssVarsRoot="">
      {children}
    </ChakraProvider>
  );
}
