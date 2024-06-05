"use client"
import Arrow from '@/components/Arrow'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import routes from "@/utils/routes";
import { Doctor } from '@/interfaces/nurse/nurse.interface'
import { getDoctors } from '@/services/nurse/nurse.service'
import DoctorCard from '@/components/doctor-list-card/page'

function DoctorList() {
    const [doctors, setDoctors] = useState<Doctor[]>();

  useEffect(() => {
   const fetchPatients = async () => {
        const response = await getDoctors(); 
        setDoctors(response);
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
            Lista de especialistas 
          </Heading>
        </Flex>
        <Flex
          direction={"column"}
          paddingX={"30px"}
          paddingBottom={"30px"}
          marginTop={"20px"}
        >
            <Flex direction={"row"} marginBottom={"10px"} justifyContent={"flex-end"}>
          <Link href={routes.nurseRegisterDoctor}>
          <Text color="#4F1964">+ Registrar especialista</Text>
          </Link>
          </Flex>
          {doctors?.map((doctors) => (
            <DoctorCard key={doctors.nationalId} fullName={doctors.user.fullname}/>
          ))}
        </Flex>
           
        </Box>    
  )
}

export default DoctorList