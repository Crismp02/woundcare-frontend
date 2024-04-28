"use client";
import { Box, Heading, Text, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import "@/styles/perfil/perfil.css";
import Image from "next/image";

function Perfil() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
{/* Header*/}
      <Box className="perfilHeader">
        <Box className="circle">
          <Box className="returnButton">
            <Image
              src="/perfil/arrow.png"
              alt="arrow"
              width={36}
              height={36}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
        <Box className="headerContent">
          <Heading as="h1" className="perfilTitle">
            Perfil
          </Heading>
          <Box className="divider" />
        </Box>
      </Box>
      <Box className="patientHeader">
        <Image
          src="/perfil/female_user.png"
          alt="female_user"
          width={80}
          height={80}
        />
        <Heading as="h2" className="userName">
          Nombre Paciente
        </Heading>
      </Box>
      {/* Personal information*/}
      <Text className="infoText">
        Información personal:{" "}
      </Text>
      <Box className="containerItems">
        <Box className="infoItem">
          <Box className="itemsLine">
            <Box className="iconItem">
              <Image src="/perfil/user.png" alt="user" width={35} height={25} />
            </Box>
            <Text className="itemText">
              Alergias conocidas
            </Text>
          </Box>
          <Box className="arrowItem" onClick={onOpen}>
            <Image
              src="/perfil/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box className="dividerItem" />
        <Box className="infoItem">
          <Box className="itemsLine">
            <Box className="iconItem">
              <Image src="/perfil/drop.png" alt="drop" width={35} height={25} />
            </Box>
            <Text as="h3" className="itemText">
              Grupo sanguíneo
            </Text>
          </Box>
          <Box className="arrowItem">
            <Image
              src="/perfil/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box className="dividerItem" />
        <Box className="infoItem">
          <Box className="itemsLine">
            <Box className="iconItem">
              <Image
                src="/perfil/h&w.svg"
                alt="height&weight"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Peso y altura
            </Text>
          </Box>
          <Box className="arrowItem">
            <Image
              src="/perfil/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box className="dividerItem" />
        <Box className="infoItem">
          <Box className="itemsLine">
            <Box className="iconItem">
              <Image
                src="/perfil/health.png"
                alt="health"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Enfermedades existentes
            </Text>
          </Box>
          <Box className="arrowItem">
            <Image
              src="/perfil/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box className="dividerItem" />
        <Box className="infoItem">
          <Box className="itemsLine">
            <Box className="iconItem">
              <Image
                src="/perfil/phone.png"
                alt="phone"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Número de teléfono
            </Text>
          </Box>
          <Box className="arrowItem">
            <Image
              src="/perfil/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box className="dividerItem" />
        <Box className="infoItem">
          <Box className="itemsLine">
            <Box className="iconItem">
              <Image
                src="/perfil/location.png"
                alt="location"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Dirección
            </Text>
          </Box>
          <Box className="arrowItem">
            <Image
              src="/perfil/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box className="dividerItem" />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Hola</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Perfil;
