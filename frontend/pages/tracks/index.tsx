import { Button, Card, Grid, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react'
import { TrackList } from '../../components/TrackList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks } from '../../store/action.creators/track';
import { ITrack } from '../../types/tracks';

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(state => state.track);

  if (error) {
    return <MainLayout>
      <h2>{error}</h2>
    </MainLayout>
  }

  return (
    <MainLayout title={"Список треков - музыкальная платформа"}>
      <Grid container justifyContent="center">
        <Card style={{ width: 1200}}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/creation')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
};

export default Index;


export const getServerSideProps = wrapper.getServerSideProps(async({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());
})