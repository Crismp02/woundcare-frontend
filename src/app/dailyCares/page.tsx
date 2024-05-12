"use client"
import React, {useState} from 'react'
import "@/styles/dailyCares/dailyCares.css";
import { Box, Heading, Radio, RadioGroup, Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react";
import Image from "next/image";

function DailyCares() {
    const [answer1, setAnswer1] = useState<string>('');
    const [answer2, setAnswer2] = useState<string>('');
    const [answer3, setAnswer3] = useState<string>('');
    const [answer4, setAnswer4] = useState<string>('');
    const [answer5, setAnswer5] = useState<string>('');
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
              files: files
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
              width={36}
              height={36}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
        <Box className="headerContent">
          <Heading as="h1" className="perfilTitle">
            Cuidados diarios
          </Heading>
          <Box className="divider" />
        </Box>
      </Box>
      <Box className="survey">
        <Box className="surveyContent">
          <Image src="/dailyCare/fever.png" alt="fever" width={105} height={105} />
          <Box display="flex" flexDirection="column" justifyContent="center">
          <Text className='surveyText'>
              Tiene temperatura mayor de 38º C:
            </Text>
            <RadioGroup display="flex" flexDirection="column" onChange={setAnswer1}>
              <Radio value="Si" size="lg" colorScheme='purple'>
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme='purple'>
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Box>
        <Box className="surveyDivider" />
        <Box className="surveyContent">
          <Box display="flex" flexDirection="column" justifyContent="center">
          <Text className='surveyText'>
              Tiene hinchazón en el área de la herida:
            </Text>
            <RadioGroup display="flex" flexDirection="column" onChange={setAnswer2}>
              <Radio value="Si" size="lg" colorScheme='purple'>
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme='purple'>
                No
              </Radio>
            </RadioGroup>
          </Box>
          <Image src="/dailyCare/swollen.png" alt="fever" width={105} height={105} />
        </Box>
        <Box className="surveyDivider" />
        <Box className="surveyContent">
          <Image src="/dailyCare/wound.png" alt="fever" width={105} height={105} />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text className='surveyText'>
              Tiene algún tipo de secreciones (pus o sangre) en la herida:
            </Text>
            <RadioGroup display="flex" flexDirection="column" onChange={setAnswer3}>
              <Radio value="Si" size="lg" colorScheme='purple'>
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme='purple'>
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Box>
        <Box className="surveyDivider" />
        <Box className="surveyContent">
          <Box display="flex" flexDirection="column" justifyContent="center">
          <Text className='surveyText'>
              Tiene enrojecimiento alrededor de la herida:
            </Text>
            <RadioGroup display="flex" flexDirection="column" onChange={setAnswer4}>
              <Radio value="Si" size="lg" colorScheme='purple'>
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme='purple'>
                No
              </Radio>
            </RadioGroup>
          </Box>
          <Image src="/dailyCare/alergies.png" alt="fever" width={105} height={105} />
        </Box>
        <Box className="surveyDivider" />
        <Box className="surveyContent">
          <Image src="/dailyCare/pain.png" alt="fever" width={105} height={105} />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text className='surveyText'>
              Tiene dolor en el sitio de la herida:
            </Text>
            <RadioGroup display="flex" flexDirection="column" onChange={setAnswer5}>
              <Radio value="Si" size="lg" colorScheme='purple'>
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme='purple'>
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Box>
        <Box className="surveyDivider" />
        <Text fontSize="22px" fontWeight="bold" paddingTop="20px" paddingLeft="20px" color="#3B3B3B">Toma fotos de tu herida desde diferentes ángulos</Text>
        <input 
        style={{ display: 'none' }} 
        id='fileUpload' 
        type="file" 
        accept="image/jpeg, image/jpg, image/png" 
        capture="environment" 
        multiple 
        onChange={handleFileChange} 
      />
      <label htmlFor='fileUpload' className='uploadImages'>
        <Image src="/dailyCare/camera.png" alt="upload" width={120} height={120}/>
      </label>
      <ul>
        {files.map((file, index) => (
          <Tag key={index} className='uploadedFile' backgroundColor={"#AD8EB1"}>
            <TagLabel>
            {file.name}
            </TagLabel>
            <TagCloseButton onClick={() => handleFileRemove(index)}/>
          </Tag>
        ))}
      </ul>
      <button className='sendButton' disabled={!canSubmit} onClick={handleSubmit}>Enviar</button>
      </Box>
    </>
  );
}

export default DailyCares