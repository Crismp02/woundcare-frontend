import { useRouter } from "next/navigation";

export function useRoleRouter() {
  const router = useRouter();

  const roleRoute = new Map();
  roleRoute.set("ADMIN", () => router.push("/adminHomePage"));
  roleRoute.set("PATIENT", () => router.push("/homePage"));
  roleRoute.set("NURSE", () => router.push("/"));
  roleRoute.set("DOCTOR", () => router.push("/"));

  return roleRoute;
}
