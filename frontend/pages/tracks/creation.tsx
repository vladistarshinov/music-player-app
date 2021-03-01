import { Grid, Button, TextField, Box } from '@material-ui/core';
import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

const Сreation = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [cover, setCover] = useState(null);
  const [track, setTrack] = useState(null);

  const back = () => {
    setActiveStep(prev => prev-1)
  };

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev+1)
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <h1>Загрузка информации о треке</h1>
            <TextField
              style={{ marginTop: 10 }}
              label="Название трека"
              fullWidth
            />
            <TextField 
              style={{ marginTop: 10 }}
              label="Исполнитель"
              fullWidth
            />
            <TextField 
              style={{ marginTop: 10 }}
              label="Слова к песне"
              fullWidth
              multiline
              rows={4}
            />
            <Button>Отправить</Button>
          </Grid>
        )}
        {activeStep === 1 && (
          <>
            <h1 style={{ textAlign: 'center' }}>Загрузка обложки</h1>
            <FileUpload setFile={setCover} accept="image/*">
              <Box display="block" style={{ textAlign: 'center' }}>
                <Button>Загрузить обложку</Button>
                {cover !== null && <p>{cover.name}</p>}
              </Box>
            </FileUpload>
          </>
        )}
        {activeStep === 2 && (
          <>
            <h1 style={{ textAlign: 'center' }}>Загрузка трека</h1>
            <FileUpload setFile={setTrack} accept="audio/*">
              <Box display="block" style={{ textAlign: 'center' }}>
                <Button>Загрузить трек</Button>
                {track !== null && <p>{track.name}</p>}
              </Box>
            </FileUpload>
          </>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  )
};

export default Сreation;