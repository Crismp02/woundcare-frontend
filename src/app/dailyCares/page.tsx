"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

function DailyCares() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answer5, setAnswer5] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  const allAnswersProvided =
    answer1 && answer2 && answer3 && answer4 && answer5;
  const allFilesUploaded = files.length > 0;
  const canSubmit = allAnswersProvided && allFilesUploaded;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files as FileList);
    setFiles([...files, ...selectedFiles]);
  };

  const handleFileRemove = (index: number) => {
    setFiles(files.filter((file, i) => i !== index));
  };

  const handleSubmit = () => {
    const answers = {
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
      files: files,
    };
    console.log(answers);
  };
  return (
    <>
      <Flex w="100vw" h="13vh" justify="space-between" pr="3vh">
        <Box
          w="18vh"
          h="18vh"
          bg="#AD8EB1"
          pt="2vh"
          pl="2vh"
          sx={{ clipPath: "circle(66.4% at 1% 1%)" }}
        >
          <Box
            w="5vh"
            h="5vh"
            borderRadius="35px"
            bg="white"
            p="5px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            justifyContent="center"
          >
            <Image
              src="/arrow.png"
              alt="arrow"
              width={36}
              height={36}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
        <Flex w="65vw" direction="column" align="flex-end" justify="center">
          <Heading
            fontWeight="bold"
            color="#4F1964"
            fontSize="30px"
            mt="6vh"
            mb="1vh"
            mr="10px"
          >
            Cuidados diarios
          </Heading>
          <Box w="55vw" h="2px" bg="#AD8EB1" />
        </Flex>
      </Flex>
      <Flex
        w="100vw"
        pl="20px"
        pr="20px"
        mb="30px"
        direction="column"
        align="center"
      >
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Image
            src="/dailyCare/fever.png"
            alt="fever"
            width={105}
            height={105}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene temperatura mayor de 38º C:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer1}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene hinchazón en el área de la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer2}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
          <Image
            src="/dailyCare/swollen.png"
            alt="fever"
            width={105}
            height={105}
          />
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Image
            src="/dailyCare/wound.png"
            alt="fever"
            width={105}
            height={105}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene algún tipo de secreciones (pus o sangre) en la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer3}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene enrojecimiento alrededor de la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer4}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
          <Image
            src="/dailyCare/alergies.png"
            alt="fever"
            width={105}
            height={105}
          />
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Image
            src="/dailyCare/pain.png"
            alt="fever"
            width={105}
            height={105}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene dolor en el sitio de la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer5}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Text
          fontSize="22px"
          fontWeight="bold"
          paddingTop="20px"
          paddingLeft="20px"
          color="#3B3B3B"
        >
          Toma fotos de tu herida desde diferentes ángulos
        </Text>
        <input
          style={{ display: "none" }}
          id="fileUpload"
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          capture="environment"
          multiple
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileUpload"
          style={{
            display: "flex",
            marginTop: "20px",
            backgroundColor: "#AD8EB1",
            width: "80vw",
            height: "20vh",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          <Image
            src="/dailyCare/camera.png"
            alt="upload"
            width={120}
            height={120}
          />
        </label>
        <ul>
          {files.map((file, index) => (
            <Tag key={index} mt="10px" mr="10px" backgroundColor={"#AD8EB1"}>
              <TagLabel>{file.name}</TagLabel>
              <TagCloseButton onClick={() => handleFileRemove(index)} />
            </Tag>
          ))}
        </ul>
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
          _disabled={{ bg: "#cccccc", color: "#666666", cursor: "not-allowed" }}
          isDisabled={!canSubmit}
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </Flex>
    </>
  );
}

export default DailyCares;
