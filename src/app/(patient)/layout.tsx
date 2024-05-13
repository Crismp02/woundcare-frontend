"use client";
import { useAppSelector } from "@/store/store";
import { useRoleRouter } from "@/hooks/useRoleRouter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/navBar";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = useAppSelector((state) => state.auth);
  const roleRouter = useRoleRouter();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!auth.authState) {
      router.push("/login");
    } else if (auth.role !== "PATIENT") {
      const redirectFunction = roleRouter.get(auth.role);
      if (redirectFunction) {
        redirectFunction();
      } else {
        router.push("/login");
      }
    }
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <>Loading...</>
  ) : (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
      width={"100vw"}
    >
      <NavBar />
      {children}
    </Box>
  );
}
