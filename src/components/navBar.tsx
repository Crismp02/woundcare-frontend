"use client";
import {
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import "@/styles/navBar/navBar.css";
import Image from "next/image";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";

function navBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const dispatch = useAppDispatch();
  const router = useRouter()

  return (
    <>
      <Box className="navBar">
        <Heading as="h1" className="navBarTitle">WoundCare</Heading>
        <Image
          src="/menu.png"
          alt="menu"
          width={30}
          height={30}
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="drawerContent">
          <DrawerCloseButton
            display="flex"
            alignSelf="flex-end"
            color="white"
          />
          <DrawerHeader>
            <Heading as="h2" className="navBarTitle">WoundCare</Heading>
            <Box className="divider" />
          </DrawerHeader>
          <DrawerBody style={{ marginTop: "20px" }}>
            <Box className="navBarItem">
              <Image src="/perfil/user.png" alt="user" width={35} height={25} />
              <Heading as="h3" className="navBarMenu">Perfil</Heading>
            </Box>
            <Box className="navBarItem">
              <Image
                src="/FAQ.png"
                alt="Preguntas Frecuentes"
                width={35}
                height={25}
              />
              <Heading as="h3" className="navBarMenu">Preguntas Frecuentes</Heading>
            </Box>
            <Box className="navBarItem" style={{marginLeft:"3px"}}>
              <Image src="/logout.png" alt="Logout" width={35} height={25} />
              <Heading as="h3" className="navBarMenu" onClick={
                () => {
                  dispatch(logout())
                  router.push("/login")
                }
              }>Cerrar sesión</Heading>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default navBar;
