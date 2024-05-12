"use client"
import React, { useState } from 'react'
import "@/styles/discharge/discharge.css";
import { Box, Heading, Image, Radio, RadioGroup, Text } from '@chakra-ui/react';
import Link from 'next/link';

function Discharge() {
  const [answer1, setAnswer1] = useState<string>('');
    const [answer2, setAnswer2] = useState<string>('');
    const [answer3, setAnswer3] = useState<string>('');
    const [answer4, setAnswer4] = useState<string>('');
    const [answer5, setAnswer5] = useState<string>('');

    const allAnswersProvided = answer1 && answer2 && answer3 && answer4 && answer5;

    const handleSubmit = () => {
      const answers = {
          answer1: answer1,
          answer2: answer2,
          answer3: answer3,
          answer4: answer4,
          answer5: answer5,
      }
      console.log(answers)
  }

  return (
    <>
    <Box className="CaresHeader">
        <Box className="circle">
          <Box className="returnButton">
          <Image
              src="/arrow.png"
              alt="arrow"
              width={10}
              height={10}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
        <Box className="headerContent">
          <Heading as="h1" className="perfilTitle">
            Alta del paciente
          </Heading>
          <Box className="divider" />
        </Box>
      </Box>
      <Box className="survey">
      <Box className="surveyContent">
          <Image src="/discharge/nurse.png" alt="nurse" width={105} height={105} />
          <Box display="flex" flexDirection="column" justifyContent="center" marginLeft={5}>
          <Text className='surveyText'>
              Estimado/a paciente:
            </Text>
            <Text fontSize={14}>Le pedimos de manera más comedida que responda la siguiente encuesta de satisfacción, sobre esta herramienta que utilizó durante el proceso de cicatrización de su herida. </Text>
          </Box>
          </Box>
          <Text color={"#4F1964"} fontWeight={500}>Por favor, deberá seleccionar la opción que describa su experiencia con el uso de esta aplicación.</Text>
          <Box className="surveyContent">
          <Box display="flex" flexDirection="column" justifyContent="center">
          <Text className='surveyText2'>
          La herramienta me ayudó en el proceso de cicatrización de mi herida:
            </Text>
            <RadioGroup display="flex" flexDirection="column" marginTop={3} onChange={setAnswer1}>
              <Radio value="Muy satisfecho" size="lg" colorScheme='purple'>
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme='purple'>
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme='purple'>
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme='purple'>
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme='purple'>
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box className="surveyDivider" />
            <Text className='surveyText2'>
          La herramienta es fácil de usar:
            </Text>
            <RadioGroup display="flex" flexDirection="column" marginTop={3} onChange={setAnswer2}>
              <Radio value="Muy satisfecho" size="lg" colorScheme='purple'>
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme='purple'>
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme='purple'>
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme='purple'>
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme='purple'>
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box className="surveyDivider" />
            <Text className='surveyText2'>
            La herramienta tiene recursos que me ayudaron a responder mis dudas:
            </Text>
            <RadioGroup display="flex" flexDirection="column" marginTop={3} onChange={setAnswer3}>
              <Radio value="Muy satisfecho" size="lg" colorScheme='purple'>
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme='purple'>
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme='purple'>
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme='purple'>
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme='purple'>
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box className="surveyDivider" />
            <Text className='surveyText2'>
            Necesito ayuda de personal experto para utilizar esta aplicación:
            </Text>
            <RadioGroup display="flex" flexDirection="column" marginTop={3} onChange={setAnswer4}>
              <Radio value="Muy satisfecho" size="lg" colorScheme='purple'>
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme='purple'>
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme='purple'>
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme='purple'>
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme='purple'>
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box className="surveyDivider" />
            <Text className='surveyText2'>
            Volvería a utilizar esta herramienta:
            </Text>
            <RadioGroup display="flex" flexDirection="column" marginTop={3} onChange={setAnswer5}>
              <Radio value="Muy satisfecho" size="lg" colorScheme='purple'>
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme='purple'>
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme='purple'>
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme='purple'>
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme='purple'>
                Muy insatisfecho
              </Radio>
            </RadioGroup>
          </Box>
        </Box>
        <Link href="/dischargeCongrats">
        <button className='sendButton' disabled={!allAnswersProvided} onClick={handleSubmit}>Enviar</button>
        </Link>
        </Box></>
  )
}

export default Discharge