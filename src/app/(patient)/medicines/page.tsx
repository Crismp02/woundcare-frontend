import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import medicinesData from "./medicinesData";

function Medicines() {
  return (
    <>
      <Flex w="100vw" h="13vh" justify="space-between" pr="3vh" mb="30px">
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
              width={10}
              height={10}
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
            Medicamentos
          </Heading>
          <Box w="55vw" h="2px" bg="#AD8EB1" />
        </Flex>
      </Flex>
      {medicinesData.map((medicine) => (
        <Flex
          key={medicine.id}
          w="100vw"
          pl="20px"
          pr="20px"
          direction="column"
          align="center"
        >
          <Flex
            direction="row"
            w="100vw"
            h="10vh"
            pl="20px"
            pr="20px"
            justify="space-between"
            align="center"
          >
            <Flex direction="row" align="center">
              <Flex
                backgroundColor="#4F1964"
                w="60px"
                h="60px"
                rounded="10px"
                justify="center"
                align="center"
              >
                <Image
                  src="/medicine/capsule.png"
                  alt="arrow"
                  width={10}
                  height={10}
                />
              </Flex>
              <Flex direction="column" ml="20px" color="#3B3B3B">
                <Text fontWeight="bold" fontSize="large">
                  {medicine.name}
                </Text>
                <Text fontWeight="300" fontSize="large">
                  {medicine.dosisPrescription}
                </Text>
              </Flex>
            </Flex>
            <Text color="#8E8E8E" fontSize="large">
              {medicine.frequency}
            </Text>
          </Flex>
          <Box w="100%" h="2px" bg="#AD8EB1" mb="5px" />
        </Flex>
      ))}
    </>
  );
}

export default Medicines;
