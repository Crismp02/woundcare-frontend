import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  Input,
  HStack,
  Tag,
  TagCloseButton,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [diseases, setDiseases] = useState<string[]>([]);

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      if (type === "Alergias conocidas") {
        setAllergies((prevAllergies) => [...prevAllergies, inputValue]);
      } else if (type === "Enfermedades existentes") {
        setDiseases((prevDiseases) => [...prevDiseases, inputValue]);
      }
      setInputValue("");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={{ backgroundColor: "#F9EDEF" }}>
        <ModalHeader>{type}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w="90vw" h="2px" bg="#4F1964" mt="-10px" mb="10px" />
          {type === "Alergias conocidas" ? (
            <>
              <Text marginBottom="10px">
                Por favor, liste sus alergias conocidas
              </Text>
              <HStack spacing={4}>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  backgroundColor="white"
                  placeholder="Alergia"
                />
                <Button bg="#4F1964" color="white" onClick={handleAddClick}>
                  +
                </Button>
              </HStack>
              <HStack spacing={4} align="start" marginTop="20px">
                {allergies.map((value, index) => (
                  <Tag backgroundColor="#AD8EB1" key={index}>
                    {value}
                    <TagCloseButton
                      onClick={() => {
                        setAllergies(allergies.filter((_, i) => i !== index));
                      }}
                    />
                  </Tag>
                ))}
              </HStack>
            </>
          ) : type === "Grupo sanguíneo" ? (
            <>
              <Text marginBottom="10px">
                Por favor, seleccione su grupo sanguíneo
              </Text>
              <Select
                backgroundColor="white"
                placeholder="Selecciona un grupo sanguíneo"
              >
                <option value="option1">A+</option>
                <option value="option2">A-</option>
                <option value="option3">B+</option>
                <option value="option4">B-</option>
                <option value="option5">AB+</option>
                <option value="option6">AB-</option>
                <option value="option7">O+</option>
                <option value="option8">O-</option>
              </Select>
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
              />
              <Input backgroundColor="white" placeholder="Altura" />
            </>
          ) : type === "Enfermedades existentes" ? (
            <>
              {" "}
              <Text marginBottom="10px">
                Por favor, liste sus enfermedades existentes
              </Text>
              <HStack spacing={4}>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  backgroundColor="white"
                  placeholder="Enfermedad"
                />
                <Button bg="#4F1964" color="white" onClick={handleAddClick}>
                  +
                </Button>
              </HStack>
              <HStack spacing={4} align="start" marginTop="20px">
                {diseases.map((value, index) => (
                  <Tag backgroundColor="#AD8EB1" key={index}>
                    {value}
                    <TagCloseButton
                      onClick={() => {
                        setDiseases(diseases.filter((_, i) => i !== index));
                      }}
                    />
                  </Tag>
                ))}
              </HStack>
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
              />
            </>
          ) : type === "Dirección" ? (
            <>
              <Text marginBottom="10px">Por favor, ingrese su dirección</Text>
              <Textarea
                backgroundColor="white"
                placeholder="Dirección"
                marginBottom="10px"
              />
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
            Cancelar
          </Button>
          <Button bg="#4F1964" color="white" mr={3} onClick={onClose}>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
