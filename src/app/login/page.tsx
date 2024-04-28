"use client";
import { login } from "@/services/auth/login.service";
import { useAppDispatch } from "@/store/store";
import { Box, Heading, Text, Input, Checkbox, Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { login as sliceLogin } from "@/store/authSlice";
import handsHearth from "../../../public/login/handsHearth.png";
import purpleStars from "../../../public/login/purpleStars.png";
import purpleButtom from "../../../public/login/purpleBottom.png";
import purpleTop from "../../../public/login/purpleTop.png";
import { useRouter } from "next/navigation";

function Login() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const roleMap = new Map();
  roleMap.set("ADMIN", () => router.push("/homePage"));
  roleMap.set("PATIENT", () => router.push("/homePage"));
  roleMap.set("NURSE", () => router.push("/"));
  roleMap.set("DOCTOR", () => router.push("/"));

  const dispatch = useAppDispatch();
  const router = useRouter();

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { token, role } = await login(nationalId, password);
      dispatch(sliceLogin({ token, role }));
      const redirectFunction = roleMap.get(role);
      if (redirectFunction) {
        redirectFunction();
      }
    } catch (error: any) {
      console.log(error);
      if (error.status === 401) {
        toast.error("Credenciales incorrectas");
      } else {
        toast.error("Error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box as="main" display="flex" flexDirection="column" minHeight="100vh">
      <Image
        src={purpleTop}
        alt="purple decoration"
        width={60}
        height={60}
        style={{ marginBottom: "-40px" }}
      ></Image>
      <Image
        src={purpleStars}
        alt="WoundCare Image"
        width={71}
        height={61}
        style={{ alignSelf: "flex-end" }}
      ></Image>
      <Heading as="h1" size="3xl" textAlign="center" color="#3B3B3B">
        Bienvenido a WoundCare
      </Heading>
      <Image
        src={purpleStars}
        alt="WoundCare Image"
        width={71}
        height={61}
      ></Image>
      <Box width="100vw" display="flex" justifyContent="center">
        <Text
          width={275}
          textAlign="center"
          fontSize="xl"
          color="#3B3B3B"
          fontWeight={500}
        >
          Para continuar, por favor, ingrese su cédula y la clave de seguridad.
        </Text>
      </Box>
      <Image
        src={handsHearth}
        alt="WoundCare Image"
        width={153}
        style={{ alignSelf: "center", marginBottom: "20px" }}
      ></Image>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        gap="28px"
        alignItems="center"
        flexGrow={1}
        onSubmit={signIn}
      >
        <Input
          placeholder="Cédula"
          value={nationalId}
          onChange={(event) => setNationalId(event.target.value)}
          maxWidth="311px"
          width="80%"
          height="55px"
          border="none"
          focusBorderColor="transparent"
        />
        <Input
          placeholder="Clave de seguridad"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          maxWidth="311px"
          width="80%"
          height="55px"
          border="none"
          focusBorderColor="transparent"
        />
        <Checkbox
          colorScheme="purple"
          onChange={() => setAcceptTerms(!acceptTerms)}
        >
          <Text color="#8E8E8E" fontSize="smaller">
            Estoy de acuerdo con los términos y condiciones
          </Text>
        </Checkbox>
        <Button
          maxWidth="311px"
          width="80%"
          height="55px"
          border="none"
          bgColor="purple"
          color="white"
          isDisabled={!acceptTerms || !nationalId || !password}
          isLoading={loading}
          _hover={{ bgColor: "#4f1c63" }}
          type="submit"
        >
          Ingresar
        </Button>
      </Box>
      <Image
        src={purpleButtom}
        alt="purple decoration"
        style={{ alignSelf: "flex-end" }}
        width={60}
        height={60}
      ></Image>
    </Box>
  );
}

export default Login;
