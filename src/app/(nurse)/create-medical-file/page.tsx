"use client";
import Arrow from '@/components/Arrow'
import { Box, Button, Flex, Heading, Input, Select, Text, Textarea, useToast } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { createMedicalFile, getDoctors, getMe } from '@/services/nurse/nurse.service';
import { Doctor, Nurse } from '@/interfaces/nurse/nurse.interface';

function CreateMadicalFile() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const router = useRouter();
  const toast = useToast();

    const [description, setDescription] = useState("");
    const [medicalHistory, setMedicalHistory] = useState([{
      id: 0,
      text: ""
    }]);
    const [generalState, setGeneralState] = useState("");
    const [vitalSigns, setVitalSigns] = useState("");
    const [wound, setWound] = useState("");
    const [previousTreatment, setPreviousTreatment] = useState([{
      id: 0,
      text: ""
    }]);
    const [glucosa, setGlucosa] = useState("");
    const [hba1c, setHba1c] = useState("");
    const [woundCulture, setWoundCulture] = useState("");
    const [carePlan, setCarePlan] = useState([{
      id: 0,
      text: ""
    }]);

    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [nurse, setNurse] = useState<Nurse>();

    useEffect(() => {
      const fetchDoctors = async () => {
        const response = await getDoctors(); 
        setDoctors(response)
      };
    
      fetchDoctors();
    }, []);

    useEffect(() => {
      const fetchNurse = async () => {
        const response = await getMe(); 
        setNurse(response)
      };
    
      fetchNurse();
    }, []);

    const validMedicalFile = selectedDoctor && description && medicalHistory && generalState && vitalSigns && wound && previousTreatment && glucosa && hba1c && woundCulture && carePlan;

    const handleSubmit = () => {
      if (!id || !nurse || !selectedDoctor) {
        toast({
          title: "Error",
          description: "Ha ocurrido un error",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
  
      const data = {
        patientId: id,
        doctorId: selectedDoctor,
        nurseId: nurse?.nationalId,
        date: new Date().toISOString(),
        description,
        medicalHistory: medicalHistory.map(item => item.text),
        physicalExam: [
          generalState,
          vitalSigns,
          wound
        ],
        previousTreatment: previousTreatment.map(item => item.text),
        labResults: [
          glucosa,
          hba1c,
          woundCulture
        ],
        carePlan: carePlan.map(item => item.text)
      }
      try {
        createMedicalFile(data);
        toast({
          title: "Success",
          description: "Historia médica creada con éxito",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push(`/nurse-home-page`);
      } catch (error: any) {
        toast({
          title: "Error",
          description: "Ha ocurrido un error al crear la historia médica",
          status: "error",
          duration: 3000,
          isClosable: true,
        });  
      }
      
    }

  return (
    <>
      <Box as="main" flex={1}>
        <Flex
          marginTop={16}
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
            Médico asignado:
          </Text>
          <Select backgroundColor={"white"} placeholder='Asigne a un médico' marginBottom={"20px"} onChange={(e) => setSelectedDoctor(e.target.value)}>
          {doctors.map((doctor, index) => (
    <option key={index} value={doctor.nationalId}>
      {doctor.user.fullname}
    </option>
  ))}
          </Select>
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
          <Input placeholder="Estado general" marginBottom={"10px"} backgroundColor={"white"} value={generalState} onChange={(e) => setGeneralState(e.target.value)}/>
          <Text fontWeight={"500"}>Signos vitales:</Text>
          <Input placeholder="Signos vitales" marginBottom={"10px"} backgroundColor={"white"} value={vitalSigns} onChange={(e) => setVitalSigns(e.target.value)}/>
          <Text fontWeight={"500"}>Herida:</Text>
          <Textarea placeholder="Herida" marginBottom={"20px"} backgroundColor={"white"} value={wound} onChange={(e) => setWound(e.target.value)}/>
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
              onClick={() => setPreviousTreatment([...previousTreatment, {
                id: previousTreatment.length,
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
                if(previousTreatment.length > 1) setPreviousTreatment(previousTreatment.slice(0, -1))
                }}
              borderWidth={"2px"}
              backgroundColor={"transparent"}
              borderColor={"#4F1964"}
              color={"#4F1964"}
            >
              -
            </Button>
          </Flex>
          {previousTreatment.map((value, index) => (
            <Textarea
              key={index}
              placeholder="Tratamientos previos"
              marginBottom={"20px"}
              backgroundColor={"white"}
              value={value.text}
              onChange={(e) => setPreviousTreatment(previousTreatment.map((value) => {
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
            Resultados de laboratorio:
          </Text>
          <Text fontWeight={"500"}>Glucosa en ayunas:</Text>
          <Input placeholder="Glucosa en ayunas" marginBottom={"10px"} backgroundColor={"white"} value={glucosa} onChange={(e) => setGlucosa(e.target.value)}/>
          <Text fontWeight={"500"}>Hemoglobina glucosilada (HbA1c):</Text>
          <Input placeholder="Hemoglobina glucosilada (HbA1c):" marginBottom={"10px"} backgroundColor={"white"} value={hba1c} onChange={(e) => setHba1c(e.target.value)}/>
          <Text fontWeight={"500"}>Cultivo de la herida:</Text>
          <Textarea placeholder="Cultivo de la herida" marginBottom={"20px"} backgroundColor={"white"} value={woundCulture} onChange={(e) => setWoundCulture(e.target.value)}/>
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
              onClick={() => setCarePlan([...carePlan, {
                id: carePlan.length,
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
                if(carePlan.length > 1) setCarePlan(carePlan.slice(0, -1))
                }}
              borderWidth={"2px"}
              backgroundColor={"transparent"}
              borderColor={"#4F1964"}
              color={"#4F1964"}
            >
              -
            </Button>  
          </Flex>
          {carePlan.map((value, index) => (
            <Textarea
              key={index}
              placeholder="Plan de cuidados"
              marginBottom={"20px"}
              backgroundColor={"white"}
              value={value.text}
              onChange={(e) => setCarePlan(carePlan.map((value) => {
                if(value.id === index)return {id: value.id, text: e.target.value}
                return value
              }))}
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
          isDisabled={!validMedicalFile}
          onClick={handleSubmit}
        >
          Crear historia médica
        </Button>
        </Flex>
      </Box>
    </>
  );
}

export default CreateMadicalFile;