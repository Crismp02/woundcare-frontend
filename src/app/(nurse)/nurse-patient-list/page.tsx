"use client"
import Arrow from '@/components/Arrow'
import PatientCard from '@/components/patient-list-card/PatientCard'
import { Patients } from '@/interfaces/nurse/nurse.interface'
import { getPatients } from '@/services/nurse/nurse.service'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import routes from "@/utils/routes";

function PatientList() {
  const [patients, setPatients] = useState<Patients[]>();

  useEffect(() => {
   const fetchPatients = async () => {
        const response = await getPatients(); 
        setPatients(response);
      };
      fetchPatients();
  }
  , [])

  return (
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
            Lista de pacientes 
          </Heading>
        </Flex>
        <Flex
          direction={"column"}
          paddingX={"30px"}
          paddingBottom={"30px"}
          marginTop={"20px"}
        >
          <Flex direction={"row"} marginBottom={"10px"} justifyContent={"flex-end"}>
          <Link href={routes.nurseRegisterPatient}>
          <Text color="#4F1964">+ Registrar paciente</Text>
          </Link>
          </Flex>      
          {patients?.map((patient) => (
            <PatientCard key={patient.nationalId} fullName={patient.user.fullname} nationalId={patient.nationalId}/>
          ))}
        </Flex>
        </Box>
  )
}

export default PatientList