import { createAllergies, createMedicalRecords, deleteAllergies, deleteMedicalRecords } from "@/services/patient/patient.service";
import { Button, HStack, Input, Tag, TagCloseButton, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

interface MedicalRecordsListProps {
  diseases: string[];
  setDiseases: (diseases: string[]) => void;
}

const MedicalRecordsList: React.FC<MedicalRecordsListProps> = ({ diseases, setDiseases }) => {
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      if (diseases.includes(inputValue)) {
        toast({
          title: "Error",
          description: "La enfermedad existente ya fue creada.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Success",
          description: "La enfermedad existente ha sido creada con éxito.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        createMedicalRecords(inputValue);
        setDiseases([...diseases, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleDeleteClick = (index: number) => {
    let diseaseToDelete = "";
      diseaseToDelete = diseases[index];
      setDiseases(diseases.filter((_, i) => i !== index));
      console.log(diseaseToDelete);
      deleteMedicalRecords(diseaseToDelete);
  };

  return (
    <>
      <Text marginBottom="10px">
        Por favor, liste sus enfermedades existentes
      </Text>
      <HStack spacing={4}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          backgroundColor="white"
          placeholder="Enfermedad existente"
        />
        <Button bg="#4F1964" color="white" onClick={handleAddClick}>
          +
        </Button>
      </HStack>
      <HStack spacing={4} align="start" marginTop="20px" wrap="wrap">
        {diseases.map((value, index) => (
          <Tag backgroundColor="#AD8EB1" key={index}>
            {value}
            <TagCloseButton onClick={() => handleDeleteClick(index)} />
          </Tag>
        ))}
      </HStack>
    </>
  );
};

export default MedicalRecordsList;