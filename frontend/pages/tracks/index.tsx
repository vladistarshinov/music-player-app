import { Button, Card, Grid, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react'
import { TrackList } from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/tracks';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', desc: 'Text text text', listens: 0, cover: 'http://localhost:5000/image/5c90134e-f144-40a5-bbad-47fc42b24aa9.jpg', audio: 'http://localhost:5000/audio/0c861925-3831-4790-a59b-c02cb6efdbe3.mp3', comments: []},
    {_id: '2', name: 'Track 2', artist: 'Исполнитель 2', desc: 'Text text text 2', listens: 2, cover: 'http://localhost:5000/image/5c90134e-f144-40a5-bbad-47fc42b24aa9.jpg', audio: 'http://localhost:5000/audio/0c861925-3831-4790-a59b-c02cb6efdbe3.mp3', comments: []},
    {_id: '3', name: 'Track 3', artist: 'Исполнитель 3', desc: 'Text text text 3', listens: 3, cover: 'http://localhost:5000/image/5c90134e-f144-40a5-bbad-47fc42b24aa9.jpg', audio: 'http://localhost:5000/audio/0c861925-3831-4790-a59b-c02cb6efdbe3.mp3', comments: []}
  ];
  return (
    <MainLayout>
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
