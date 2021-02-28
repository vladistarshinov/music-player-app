import { Grid, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

const Сreation = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

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
          <h1>Загрузка обложки</h1>
        )}
        {activeStep === 2 && (
          <h1>Загрузка трека</h1>
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