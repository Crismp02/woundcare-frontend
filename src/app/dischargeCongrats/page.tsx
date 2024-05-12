import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import "@/styles/dischargeCongrats/dischargeCongrats.css";

function dischargeCongrats() {
  return (
    <Box style={{padding: "20px", display: "flex", flexDirection: "column"}}>
    <Image src="/dischargeCongrats/heart.png" alt="heart" width={90} height={90} />
    <Box className='imageposition'>
    <Image src="/dischargeCongrats/cross.png" alt="heart" width={110} height={110} />
    </Box>
    <Text className='congratsText'>¡Felicidades por completar su tratamiento exitosamente!</Text>
    <Image src="/dischargeCongrats/nurses.png" alt="heart" width="100vw" />
    <Text className='Text'>De parte de todo el equipo de salud, esperamos que tu recuperación haya sido completa y exitosa</Text>
    </Box>
  )
}

export default dischargeCongrats