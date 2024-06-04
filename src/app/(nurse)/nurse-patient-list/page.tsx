"use client"
import Arrow from '@/components/Arrow'
import PatientCard from '@/components/patient-list-card/PatientCard'
import { Patients } from '@/interfaces/nurse/nurse.interface'
import { getPatients } from '@/services/nurse/nurse.service'
import { Box, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import routes from "@/utils/routes";
import { useInView } from 'react-intersection-observer'
import PaginationLoader from '@/components/PaginationLoader'

function PatientList() {
  const [page, setPage] = useState(1);
  const [totalPatients, setTotalPatients] = useState<number>(0);
  const [patients, setPatients] = useState<Patients[]>([]);
  const { ref, inView } = useInView();
  const toast = useToast();

  const fetchPatients = async () => {
    try {
      const patientsList = await getPatients(page, 10);
      setPatients([...patients, ...patientsList.items]);
      if (page === 1) setTotalPatients(patientsList.meta.totalItems);
      setPage(page + 1);
    } catch (error) {
      toast({
        title: "Error al cargar los pacientes",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    if (inView || page === 1) {
      fetchPatients();
    }
  }, [inView, page]);

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
          {!(totalPatients === patients.length) && (
            <Box ref={ref}>
            <PaginationLoader />
          </Box>
          )}
          {!(patients.length > 0) && (
            <Flex justifyContent="center" marginTop={4}>
              <Text color="#4F1964">No hay pacientes registrados</Text>
              </Flex>
          )}
        </Flex>
        </Box>
  )
}

export default PatientList