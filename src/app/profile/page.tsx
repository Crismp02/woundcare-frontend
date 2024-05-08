"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React, {useState} from "react";
import "@/styles/perfil/perfil.css";
import Image from "next/image";
import ModalComponent from "./modalComponent";

function Perfil() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header*/}
      <Box className="perfilHeader">
        <Box className="circle">
          <Box className="returnButton">
            <Image
              src="/arrow.png"
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
          src="/profile/female_user.png"
          alt="female_user"
          width={80}
          height={80}
        />
        <Heading as="h2" fontSize="x-large" className="userName">
          Nombre Paciente
        </Heading>
      </Box>
      {/* Personal information*/}
      <Text className="infoText">Información personal: </Text>
      <Box className="containerItems">
        <Box className="infoItem">
          <Box className="itemsLine">
            <Box className="iconItem">
              <Image src="/profile/user.png" alt="user" width={35} height={25} />
            </Box>
            <Text className="itemText">Alergias conocidas</Text>
          </Box>
          <Box
            className="arrowItem"
            onClick={() => openModal("Alergias conocidas")}
          >
            <Image
              src="/profile/arrowRight.png"
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
              <Image src="/profile/drop.png" alt="drop" width={35} height={25} />
            </Box>
            <Text as="h3" className="itemText">
              Grupo sanguíneo
            </Text>
          </Box>
          <Box
            className="arrowItem"
            onClick={() => openModal("Grupo sanguíneo")}
          >
            <Image
              src="/profile/arrowRight.png"
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
                src="/profile/h&w.svg"
                alt="height&weight"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Peso y altura
            </Text>
          </Box>
          <Box className="arrowItem" onClick={() => openModal("Peso y altura")}>
            <Image
              src="/profile/arrowRight.png"
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
                src="/profile/health.png"
                alt="health"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Enfermedades existentes
            </Text>
          </Box>
          <Box
            className="arrowItem"
            onClick={() => openModal("Enfermedades existentes")}
          >
            <Image
              src="/profile/arrowRight.png"
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
                src="/profile/phone.png"
                alt="phone"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Número de teléfono
            </Text>
          </Box>
          <Box
            className="arrowItem"
            onClick={() => openModal("Número de teléfono")}
          >
            <Image
              src="/profile/arrowRight.png"
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
                src="/profile/location.png"
                alt="location"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" className="itemText">
              Dirección
            </Text>
          </Box>
          <Box className="arrowItem" onClick={() => openModal("Dirección")}>
            <Image
              src="/profile/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Box>
        <Box className="dividerItem" />
      </Box>
      <ModalComponent isOpen={isOpen} onClose={closeModal} type={modalType} />
    </>
  );
}

export default Perfil;
