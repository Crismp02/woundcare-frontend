"use client";
import Arrow from "@/components/Arrow";
import { createPatient } from "@/services/nurse/nurse.service";
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Select,
  Textarea,
  HStack,
  Button,
  TagCloseButton,
  Tag,
  FormControl,
  FormErrorMessage,
  useToast
} from "@chakra-ui/react";
import { create } from "domain";
import { stat } from "fs";
import React, { useState } from "react";
import { AllergiesInputComponent, DiseasesInputComponent, SelectComponent, SubmitButtonComponent, TextFieldComponent, TextFieldComponent2 } from "./inputsForm";

function RegisterPatient() {
  type Genre = 'MALE' | 'FEMALE';
  type BloodType = 
  | "A_POSITIVE"
  | "A_NEGATIVE"
  | "B_POSITIVE"
  | "B_NEGATIVE"
  | "AB_POSITIVE"
  | "AB_NEGATIVE"
  | "O_POSITIVE"
  | "O_NEGATIVE";

  type PatientStatus = 'ACTIVE' | 'INACTIVE';

  //Constants
  const [id, setId] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genre, setGenre] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [inputDisease, setInputDisease] = useState("");
  const [medicalRecord, setMedicalRecord] = useState<string[]>([]);

  //Validations
  const isIdValid = /^[0-9]+$/.test(id);
  const isFullNameValid = fullname.trim().split(" ").length >= 3;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isDateValid = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    return !isNaN(date.getTime()) && date <= now;
  };
  const isBirthDateValid = isDateValid(birthDate);
  const isPhoneNumberValid = /^[0-9]{7}$/.test(phoneNumber);
  const isCellPhoneNumberValid = /^[0-9]{9}$/.test(cellPhoneNumber);
  const isWeightValid = (weight: string) => {
    const weightNumber = Number(weight);
    return !isNaN(weightNumber) && weightNumber > 0 && weightNumber < 500;
  };

  const isHeightValid = (height: string) => {
    const heightNumber = Number(height);
    return !isNaN(heightNumber) && heightNumber > 0 && heightNumber < 300;
  };

  const isWeightInputValid = isWeightValid(weight);
  const isHeightInputValid = isHeightValid(height);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();
  const formattedBirthDate = birthDate ? new Date(birthDate).toISOString() : "";

  //Functions
  const handleAddClick = () => {
    if (inputValue) {
      setAllergies((prevAllergies) => [...prevAllergies, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteClick = (index: number) => {
    setAllergies((prevAllergies) =>
      prevAllergies.filter((_, i) => i !== index)
    );
  };

  const handleAddClickDisease = () => {
    if (inputDisease) {
      setMedicalRecord((prevDiseases) => [...prevDiseases, inputDisease]);
      setInputDisease("");
    }
  };

  const handleDeleteClickDisease = (index: number) => {
    setMedicalRecord((prevDiseases) =>
      prevDiseases.filter((_, i) => i !== index)
    );
  };

  const isFormValid =
    id &&
    fullname &&
    email &&
    password &&
    genre &&
    birthDate &&
    address &&
    phoneNumber &&
    cellPhoneNumber &&
    bloodType &&
    weight &&
    height;

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (isFormValid && isIdValid &&
      isFullNameValid &&
      isEmailValid &&
      isBirthDateValid &&
      isPhoneNumberValid &&
      isCellPhoneNumberValid &&
      isWeightInputValid &&
      isHeightInputValid){

      const patient = {
        nationalId: id,
        fullname,
        email,
        password,
        genre: genre as Genre , 
        birthDate: formattedBirthDate,
        adress: address,
        phoneNumber,
        cellPhoneNumber,
        bloodType: bloodType as BloodType ,
        weight: Number(weight),
        height: Number(height),
        allergies,
        medicalRecord,
        status:'ACTIVE' as PatientStatus ,
        photo: "a",
      };
      try {
        createPatient(patient);
        toast({
          title: "Success",
          description: "Paciente registrado con éxito",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error: any) {
        if (error.response.status === 409) {
        toast({
          title: "Error",
          description: "Ya existe un usuario con esa cédula de identidad",
          status: "error",
          duration: 3000,
          isClosable: true,
        })} else {
          toast({
            title: "Error",
            description: "Ha ocurrido un error al registrar el paciente",
            status: "error",
            duration: 3000,
            isClosable: true,
          });      
        }
      }   
    } else {
      toast({
        title: "Error",
        description: "Por favor, llena todos los campos correctamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Box as="main" flex={1}>
        <Arrow />
        <Flex
          marginTop={-16}
          marginRight={6}
          flexDirection="column"
          alignItems="flex-end"
        >
          <Heading
            as="h1"
            color="#4F1964"
            borderBottom={"2px solid #AD8EB1"}
            paddingX="10px"
          >
            Registrar paciente
          </Heading>
        </Flex>
        <Flex display={"flex"} flexDirection={"column"} padding={"30px"}>
          {/*<Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Cédula de identidad:
          </Text>
          <FormControl isInvalid={isSubmitted && !isIdValid}>
            <Input
              placeholder="Cédula de identidad"
              marginBottom={"20px"}
              backgroundColor="white"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {isSubmitted && !isIdValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce un número válido
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Nombre Completo:
          </Text>
          <FormControl isInvalid={isSubmitted && !isFullNameValid}>
            <Input
              placeholder="Nombre completo"
              marginBottom={"20px"}
              backgroundColor="white"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            {isSubmitted && !isFullNameValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce un nombre completo válido
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Correo:
          </Text>
          <FormControl isInvalid={isSubmitted && !isEmailValid}>
            <Input
              placeholder="Correo electrónico"
              marginBottom={"20px"}
              backgroundColor="white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isSubmitted && !isEmailValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce un correo electrónico válido
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Contraseña:
          </Text>
          <Input
            placeholder="Contraseña"
            marginBottom={"20px"}
            backgroundColor="white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Género:
          </Text>
          <Select
            placeholder="Selecciona un género"
            marginBottom={"20px"}
            backgroundColor="white"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="MALE">Masculino</option>
            <option value="FEMALE">Femenino</option>
          </Select>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Fecha de nacimiento:
          </Text>
          <FormControl isInvalid={isSubmitted && !isBirthDateValid}>
            <Input
              placeholder="Fecha de nacimiento"
              marginBottom={"20px"}
              backgroundColor="white"
              type="date"
              value={birthDate}
              onChange={(e) => setbirthDate(e.target.value)}
            />
            {isSubmitted && !isBirthDateValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce una fecha de nacimiento válida
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Dirección:
          </Text>
          <Textarea
            placeholder="Dirección"
            marginBottom={"20px"}
            backgroundColor="white"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Número de teléfono:
          </Text>
          <FormControl isInvalid={isSubmitted && !isPhoneNumberValid}>
            <Input
              placeholder="Número de teléfono"
              marginBottom={"20px"}
              backgroundColor="white"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {isSubmitted && !isPhoneNumberValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce un número de teléfono válido
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Teléfono celular:
          </Text>
          <FormControl isInvalid={isSubmitted && !isCellPhoneNumberValid}>
            <Input
              placeholder="Número de celular"
              marginBottom={"20px"}
              backgroundColor="white"
              value={cellPhoneNumber}
              onChange={(e) => setCellPhoneNumber(e.target.value)}
            />
            {isSubmitted && !isCellPhoneNumberValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce un número de celular válido
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Tipo de sangre:
          </Text>
          <Select
            placeholder="Selecciona un tipo de sangre"
            marginBottom={"20px"}
            backgroundColor="white"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
          >
            <option value="A_POSITIVE">A+</option>
            <option value="A_NEGATIVE">A-</option>
            <option value="B_POSITIVE">B+</option>
            <option value="B_NEGATIVE">B-</option>
            <option value="AB_POSITIVE">AB+</option>
            <option value="AB_NEGATIVE">AB-</option>
            <option value="O_POSITIVE">O+</option>
            <option value="O_NEGATIVE">O-</option>
          </Select>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Peso:
          </Text>
          <FormControl isInvalid={isSubmitted && !isWeightInputValid}>
            <Input
              placeholder="Peso"
              marginBottom={"20px"}
              backgroundColor="white"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            {isSubmitted && !isWeightInputValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce un peso válido
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Altura:
          </Text>
          <FormControl isInvalid={isSubmitted && !isHeightInputValid}>
            <Input
              placeholder="Altura"
              marginBottom={"20px"}
              backgroundColor="white"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            {isSubmitted && !isHeightInputValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce una altura válida
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Alergias conocidas:
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
          <Text
            fontWeight="bold"
            color="#3B3B3B"
            fontSize="16px"
            marginTop={"20px"}
          >
            Enfermedades existentes:
          </Text>
          <HStack spacing={4}>
            <Input
              value={inputDisease}
              onChange={(e) => setInputDisease(e.target.value)}
              backgroundColor="white"
              placeholder="Enfermedad"
            />
            <Button bg="#4F1964" color="white" onClick={handleAddClickDisease}>
              +
            </Button>
          </HStack>
          <HStack spacing={4} align="start" marginTop="20px" wrap="wrap">
            {medicalRecord.map((value, index) => (
              <Tag backgroundColor="#AD8EB1" key={index}>
                {value}
                <TagCloseButton
                  onClick={() => handleDeleteClickDisease(index)}
                />
              </Tag>
            ))}
          </HStack>
          <Button
            w="80vw"
            h="6vh"
            bg="#4F1964"
            borderRadius="15px"
            mt="20px"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            _disabled={{
              bg: "#cccccc",
              color: "#666666",
              cursor: "not-allowed",
            }}
            isDisabled={!isFormValid}
            onClick={handleSubmit}
          >
            Registrar paciente
          </Button>*/}
          <TextFieldComponent
            label="Cédula de identidad:"
            placeholder="Cédula de identidad"
            isInvalid={isSubmitted && !isIdValid}
            value={id}
            onChange={(e) => setId(e.target.value)}/>
          <TextFieldComponent
            label="Nombre completo:"
            placeholder="Nombre completo"
            isInvalid={isSubmitted && !isFullNameValid}
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}/>
          <TextFieldComponent
            label="Correo:"
            placeholder="Correo electrónico"
            isInvalid={isSubmitted && !isEmailValid}
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <TextFieldComponent2
            label="Contraseña:"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>  
          <SelectComponent
            label="Género:"
            placeholder="Selecciona un género"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            children={
              <>
                <option value="MALE">Masculino</option>
            <option value="FEMALE">Femenino</option>
              </>
            }/>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Fecha de nacimiento:
          </Text>
          <FormControl isInvalid={isSubmitted && !isBirthDateValid}>
            <Input
              placeholder="Fecha de nacimiento"
              marginBottom={"20px"}
              backgroundColor="white"
              type="date"
              value={birthDate}
              onChange={(e) => setbirthDate(e.target.value)}
            />
            {isSubmitted && !isBirthDateValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce una fecha de nacimiento válida
              </FormErrorMessage>
            )}
          </FormControl> 
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Dirección:
          </Text>
          <Textarea
            placeholder="Dirección"
            marginBottom={"20px"}
            backgroundColor="white"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextFieldComponent
            label="Número de teléfono:"
            placeholder="Número de teléfono"
            isInvalid={isSubmitted && !isPhoneNumberValid}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}/>
            <TextFieldComponent
            label="Teléfono celular:"
            placeholder="Número de celular"
            isInvalid={isSubmitted && !isCellPhoneNumberValid}
            value={cellPhoneNumber}
            onChange={(e) => setCellPhoneNumber(e.target.value)}/>
          <SelectComponent
            label="Tipo de sangre:"
            placeholder="Selecciona un tipo de sangre"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            children={
              <>
                <option value="A_POSITIVE">A+</option>
            <option value="A_NEGATIVE">A-</option>
            <option value="B_POSITIVE">B+</option>
            <option value="B_NEGATIVE">B-</option>
            <option value="AB_POSITIVE">AB+</option>
            <option value="AB_NEGATIVE">AB-</option>
            <option value="O_POSITIVE">O+</option>
            <option value="O_NEGATIVE">O-</option>
              </>
            }/>
          <TextFieldComponent
            label="Peso:"
            placeholder="Peso"
            isInvalid={isSubmitted && !isWeightInputValid}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}/>
            <TextFieldComponent
            label="Altura:"
            placeholder="Altura"
            isInvalid={isSubmitted && !isHeightInputValid}
            value={height}
            onChange={(e) => setHeight(e.target.value)}/>
            <AllergiesInputComponent
            inputValue={inputValue}
            setInputValue={setInputValue}
            allergies={allergies}
            handleAddClick={handleAddClick}
            handleDeleteClick={handleDeleteClick}/>
            <DiseasesInputComponent
            inputDisease={inputDisease}
            setInputDisease={setInputDisease}
            medicalRecord={medicalRecord}
            handleAddClickDisease={handleAddClickDisease}
            handleDeleteClickDisease={handleDeleteClickDisease}/>
          <SubmitButtonComponent
            isFormValid={!!isFormValid}
            handleSubmit={handleSubmit}/>
        </Flex>
      </Box>
    </>
  );
}

export default RegisterPatient;
