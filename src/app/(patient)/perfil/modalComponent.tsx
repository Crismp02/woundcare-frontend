import { Patient } from "@/interfaces/patient/patient.interface";
import {
  editAddress,
  editCellPhoneNumber,
  editWeight_Height,
} from "@/services/patient/patient.service";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  Input,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import AllergyList from "./modalTypes/AllergyList";
import BloodTypeList from "./modalTypes/BloodTypeList";
import MedicalRecordsList from "./modalTypes/MedicalRecordsList";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  patient: Patient;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  type,
  patient,
}) => {
  const [allergies, setAllergies] = useState<string[]>([]);
  const [diseases, setDiseases] = useState<string[]>([]);
  const [weight, setWeight] = useState<number>(patient.weight);
  const [height, setHeight] = useState<number>(patient.height);
  const [cellPhoneNumber, setCellPhoneNumber] = useState<string>(patient.cellPhoneNumber);
  const [address, setAddress] = useState<string>(patient.address);

  const handleSubmit = async () => {
    if (type === "Peso y altura"){
      editWeight_Height(weight, height);
      onClose();
    } else if (type === "Número de teléfono"){
      editCellPhoneNumber(cellPhoneNumber);
      onClose();
    } else if (type === "Dirección"){
      editAddress(address);
      onClose();
    }
  }

  useEffect(() => {
    const fetchPatientData = async () => {
    setAllergies(patient.allergies);
    setDiseases(patient.medicalRecords);
    setWeight(patient.weight);
    setHeight(patient.height);
    setCellPhoneNumber(patient.cellPhoneNumber);
    setAddress(patient.address);
  };
  fetchPatientData();
  }, [patient.allergies, patient.medicalRecords]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={{ backgroundColor: "#F9EDEF" }}>
        <ModalHeader>{type}</ModalHeader>
        <ModalBody>
          <Box w="90vw" h="2px" bg="#4F1964" mt="-10px" mb="10px" />
          {type === "Alergias conocidas" ? (
            <>
              <AllergyList allergies={allergies} setAllergies={setAllergies} />
            </>
          ) : type === "Grupo sanguíneo" ? (
            <>
              <BloodTypeList bloodType={patient.bloodType} />
            </>
          ) : type === "Peso y altura" ? (
            <>
              <Text marginBottom="10px">
                Por favor, ingrese su peso (kg) y altura (cm)
              </Text>
              <Input
                backgroundColor="white"
                placeholder="Peso"
                marginBottom="10px"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
              <Input
                backgroundColor="white"
                placeholder="Altura"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
              <Flex direction="row" justify="flex-end">
                <Button
                  mt={5}
                  bg="#4F1964"
                  color="white"
                  mr={3}
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Flex>
            </>
          ) : type === "Enfermedades existentes" ? (
            <>
            <MedicalRecordsList diseases={diseases} setDiseases={setDiseases} />
            </>
          ) : type === "Número de teléfono" ? (
            <>
              <Text marginBottom="10px">
                Por favor, ingrese su numero de teléfono
              </Text>
              <Input
                type="tel"
                backgroundColor="white"
                placeholder="Número de teléfono"
                marginBottom="10px"
                value={cellPhoneNumber}
                onChange={(e) => setCellPhoneNumber(String(e.target.value))}
              />
              <Flex direction="row" justify="flex-end">
                <Button
                  mt={5}
                  bg="#4F1964"
                  color="white"
                  mr={3}
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Flex>
            </>
          ) : type === "Dirección" ? (
            <>
              <Text marginBottom="10px">Por favor, ingrese su dirección</Text>
              <Textarea
                backgroundColor="white"
                placeholder="Dirección"
                marginBottom="10px"
                value={address}
                onChange={(e) => setAddress(String(e.target.value))}
              />
              <Flex direction="row" justify="flex-end">
                <Button
                  mt={5}
                  bg="#4F1964"
                  color="white"
                  mr={3}
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Flex>
            </>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button
            borderColor="#4F1964"
            bg="#F9EDEF"
            borderWidth="2px"
            color="#4F1964"
            mr={3}
            onClick={onClose}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
