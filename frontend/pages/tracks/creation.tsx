import { Grid, Button, TextField, Box } from '@material-ui/core';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';

const Сreation = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [cover, setCover] = useState(null);
  const [track, setTrack] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const router = useRouter();

  const back = () => {
    setActiveStep(prev => prev-1)
  };

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev+1)
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('cover', cover);
      formData.append('audio', track);
      axios.post('http://localhost:5000/tracks', formData)
        .then(res => router.push('/tracks'))
        .catch(e => console.log(e));
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <h1>Загрузка информации о треке</h1>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label="Название трека"
              fullWidth
            />
            <TextField 
              {...artist}
              style={{ marginTop: 10 }}
              label="Исполнитель"
              fullWidth
            />
            <TextField 
              {...text}
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