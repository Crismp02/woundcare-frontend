"use client";
import Arrow from '@/components/Arrow'
import { Box, Button, Flex, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

function CreateMadicalFile() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

    const [textAreaCount, setTextAreaCount] = useState(1);
    const [textAreaCount2, setTextAreaCount2] = useState(1);
    const [textAreaCount3, setTextAreaCount3] = useState(1);
    const [description, setDescription] = useState("");
    const [medicalHistory, setMedicalHistory] = useState([{
      id: 0,
      text: ""
    }]);
    const [physicalExam, setPhysicalExam] = useState([]);
    const [previousTreatment, setPreviousTreatment] = useState([]);
    const [labResults, setLabResults] = useState([]);
    const [carePlan, setCarePlan] = useState([]);


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
            Crear historia médica 
          </Heading>
        </Flex>
        <Flex
          direction={"column"}
          paddingX={"30px"}
          paddingBottom={"30px"}
          marginTop={"20px"}
        >
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Motivo de la consulta:
          </Text>
          <Textarea
            placeholder="Motivo de la consulta"
            marginBottom={"20px"}
            backgroundColor={"white"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Historia de la enfermedad actual:
          </Text>
          <Flex
            direction={"row"}
            marginBottom={"10px"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text fontWeight={"500"} marginRight={"5px"}>
                Cantidad de historias:
            </Text>    
            <Button
              onClick={() => setMedicalHistory([...medicalHistory, {
                id: medicalHistory.length,
                text: ""
              }])}
              marginRight={"5px"}
              backgroundColor={"#4F1964"}
              color={"white"}
            >
              +
            </Button>
            <Button
              onClick={() => {
                if(medicalHistory.length > 1) setMedicalHistory(medicalHistory.slice(0, -1))
                }}
              borderWidth={"2px"}
              backgroundColor={"transparent"}
              borderColor={"#4F1964"}
              color={"#4F1964"}
            >
              -
            </Button>
          </Flex>
          {medicalHistory.map((value, index) => (
            <Textarea
              key={index}
              placeholder="Historia de la enfermedad actual"
              marginBottom={"20px"}
              backgroundColor={"white"}
              value={value.text}
              onChange={(e) => setMedicalHistory(medicalHistory.map((value) => {
                if(value.id === index)return {id: value.id, text: e.target.value}
                return value
              }))}
            />
          ))}
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Evaluación física:
          </Text>
          <Text fontWeight={"500"}>Estado general:</Text>
          <Input placeholder="Estado general" marginBottom={"10px"} backgroundColor={"white"}/>
          <Text fontWeight={"500"}>Signos vitales:</Text>
          <Input placeholder="Signos vitales" marginBottom={"10px"} backgroundColor={"white"}/>
          <Text fontWeight={"500"}>Herida:</Text>
          <Textarea placeholder="Herida" marginBottom={"20px"} backgroundColor={"white"}/>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Tratamientos previos:
          </Text>
          <Flex
            direction={"row"}
            marginBottom={"10px"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text fontWeight={"500"} marginRight={"5px"}>
                Cantidad de tratamientos previos:
            </Text>    
            <Button
              onClick={() => setTextAreaCount2(textAreaCount2 + 1)}
              marginRight={"5px"}
              backgroundColor={"#4F1964"}
              color={"white"}
            >
              +
            </Button>
            <Button
              onClick={() => setTextAreaCount2(Math.max(1, textAreaCount2 - 1))}
              borderWidth={"2px"}
              backgroundColor={"transparent"}
              borderColor={"#4F1964"}
              color={"#4F1964"}
            >
              -
            </Button>
          </Flex>
          {Array.from({ length: textAreaCount2 }, (_, index) => (
            <Textarea
              key={index}
              placeholder="Tratamientos previos"
              marginBottom={"20px"}
              backgroundColor={"white"}
            />
          ))}
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Resultados de laboratorio:
          </Text>
          <Text fontWeight={"500"}>Glucosa en ayunas:</Text>
          <Input placeholder="Glucosa en ayunas" marginBottom={"10px"} backgroundColor={"white"}/>
          <Text fontWeight={"500"}>Hemoglobina glucosilada (HbA1c):</Text>
          <Input placeholder="Hemoglobina glucosilada (HbA1c):" marginBottom={"10px"} backgroundColor={"white"}/>
          <Text fontWeight={"500"}>Cultivo de la herida:</Text>
          <Textarea placeholder="Cultivo de la herida" marginBottom={"20px"} backgroundColor={"white"}/>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Plan de cuidados:
          </Text>
          <Flex
            direction={"row"}
            marginBottom={"10px"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text fontWeight={"500"} marginRight={"5px"}>
                Cantidad de planes de cuidados:
            </Text>    
            <Button
              onClick={() => setTextAreaCount3(textAreaCount3 + 1)}
              marginRight={"5px"}
              backgroundColor={"#4F1964"}
              color={"white"}
            >
              +
            </Button>
            <Button
              onClick={() => setTextAreaCount3(Math.max(1, textAreaCount3 - 1))}
              borderWidth={"2px"}
              backgroundColor={"transparent"}
              borderColor={"#4F1964"}
              color={"#4F1964"}
            >
              -
            </Button>
          </Flex>
          {Array.from({ length: textAreaCount3 }, (_, index) => (
            <Textarea
              key={index}
              placeholder="Plan de cuidados"
              marginBottom={"20px"}
              backgroundColor={"white"}
            />
          ))}
          <Button
          w="100%"
          h="6vh"
          bg="#4F1964"
          borderRadius="15px"
          mt="20px"
          color="white"
          fontSize="24px"
          fontWeight="bold"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          _disabled={{ bg: "#cccccc", color: "#666666", cursor: "not-allowed" }}
          //isDisabled={!canSubmit}
          //onClick={handleSubmit}
        >
          Crear historia médica
        </Button>
        </Flex>
      </Box>
    </>
  );
}

export default CreateMadicalFile;