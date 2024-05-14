import { createAllergies, deleteAllergies } from "@/services/patient/patient.service";
import { Button, HStack, Input, Tag, TagCloseButton, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

interface AllergyListProps {
  allergies: string[];
  setAllergies: (allergies: string[]) => void;
}

const AllergyList: React.FC<AllergyListProps> = ({ allergies, setAllergies }) => {
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      if (allergies.includes(inputValue)) {
        toast({
          title: "Error",
          description: "La alergia ya existe.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Success",
          description: "La alergia ha sido creada con éxito.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        createAllergies(inputValue);
        setAllergies([...allergies, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleDeleteClick = (index: number) => {
    let allergyToDelete = "";
      allergyToDelete = allergies[index];
      setAllergies(allergies.filter((_, i) => i !== index));
      deleteAllergies(allergyToDelete);
  };

  return (
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
      <HStack spacing={4} align="start" marginTop="20px" wrap="wrap">
        {allergies.map((value, index) => (
          <Tag backgroundColor="#AD8EB1" key={index}>
            {value}
            <TagCloseButton onClick={() => handleDeleteClick(index)} />
          </Tag>
        ))}
      </HStack>
    </>
  );
};

export default AllergyList;