import { Container, StepLabel, Stepper, Step, Grid, Card } from '@material-ui/core';
import React from 'react';
import styles from '../styles/TrackCreation.module.scss';

interface StepWrapperProps {
  activeStep: number;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек'];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container style={{ maxWidth: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step: string, index: number) =>
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )}
      </Stepper>
      <Grid container justifyContent="center" className={styles.track_creation__wrapper}>
          <Card className={styles.track_creation__card}>
            {children}
          </Card>
      </Grid>
    </Container>
  )
};

export default StepWrapper;
