"use client";
import { useAppSelector } from "@/store/store";
import { useRoleRouter } from "@/hooks/useRoleRouter";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = useAppSelector((state) => state.auth);
  const roleRouter = useRoleRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (auth.authState) {
      const redirectFunction = roleRouter.get(auth.role);
      if (redirectFunction) {
        redirectFunction();
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <Box width={"100vw"} height={"100vh"} position={"relative"}>
      <Loader />
    </Box>
  ) : (
    <>{children}</>
  );
}
