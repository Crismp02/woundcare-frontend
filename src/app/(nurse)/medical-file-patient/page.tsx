import Arrow from '@/components/Arrow'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function page() {
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
            Historia Clínica
          </Heading>
          <Text color="#4F1964" marginTop={"4px"}>
            Nº Historia
          </Text>
        </Flex>
        <Flex w="100vw" h="13vh" align="center" pr="6vw" pl="6vw">
          <Image
            src="/profile/female_user.png"
            alt="female_user"
            width={80}
            height={80}
          />
          <Heading
            as="h2"
            fontSize="x-large"
            fontWeight="bold"
            color="#4F1964"
            ml="10px"
          >
            Paciente NN
          </Heading>
        </Flex>
        <Flex direction={"column"} paddingX={"30px"} paddingBottom={"30px"}>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Información del paciente:
          </Text>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Nombre:</Text>
            <Text marginLeft={"5px"}>Cristina Morales Padrón</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Edad:</Text>
            <Text marginLeft={"5px"}>21 años</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Género:</Text>
            <Text marginLeft={"5px"}>Femenino</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Fecha de ingreso:</Text>
            <Text marginLeft={"5px"}>26 de mayo de 2024</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>C.I:</Text>
            <Text marginLeft={"5px"}>28534711</Text>
          </Flex>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginTop={"20px"}
            marginBottom={"10px"}
          >
            Antecedentes médicos:
          </Text>
          <li>Dolor de rodilla</li>
          <li>Asma</li>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginTop={"20px"}
            marginBottom={"10px"}
          >
            Motivo de la consulta:
          </Text>
          <li>Se le salió la rodilla - para variar</li>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginTop={"20px"}
            marginBottom={"10px"}
          >
            Historia de la enfermedad actual:
          </Text>
          <li>Se lesionó después de ser porrista, desde entonces su rodilla no ha vuelto a ser la misma.</li>
          <li>El hombro también se le sale, el izquierdo suena sabroso cuando se estira.</li>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
            marginTop={"20px"}
          >
            Evaluación física:
          </Text>
          <Flex direction={"column"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Estado general:</Text>
            <Text marginLeft={"5px"}>Paciente consciente, orietado y cooperativo.</Text>
          </Flex>
          <Flex direction={"column"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Signos vitales:</Text>
            <Text marginLeft={"5px"}>A bunch of shit I don&apos;t understand.</Text>
          </Flex>
          <Flex direction={"column"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Herida:</Text>
            <Text marginLeft={"5px"}>¿Años de vida o años de sufrimiento? Porque son los mismos.</Text>
          </Flex>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginTop={"20px"}
            marginBottom={"10px"}
          >
            Tratamientos previos:
          </Text>
          <li>Se pone corriente de vez en cuando, no siempre sirve.</li>
          <li>El estiramineto raro que hace para reecajarse la pierna- que también se descuadra sola.</li>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
            marginTop={"20px"}
          >
            Resultados de laboratorio:
          </Text>
          <Flex direction={"column"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Glucosa en ayunas:</Text>
            <Text marginLeft={"5px"}>Sabra cristo qué es.</Text>
          </Flex>
          <Flex direction={"column"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Hemoglobina glucosilada (HbA1C):</Text>
            <Text marginLeft={"5px"}>Wtf is this.</Text>
          </Flex>
          <Flex direction={"column"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Cultivo de la herida:</Text>
            <Text marginLeft={"5px"}>Noshe.</Text>
          </Flex>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginTop={"20px"}
            marginBottom={"10px"}
          >
            Plan de cuidados:
          </Text>
          <li>Darle dulces.</li>
          <li>Dejar que tenga 6 perritos para llamarlos como los vengadores.</li>
          <li>Michis.</li>
        </Flex>
      </Box>
    </>
  );
}

export default page