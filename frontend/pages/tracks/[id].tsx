import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/TrackDetail.module.scss';
import MainLayout from '../../layouts/MainLayout';
import { IComment, ITrack } from '../../types/tracks';
import { GetServerSideProps } from 'next';
import axios from 'axios';

const TrackDetail = ({ serverTrack }) => {
  // const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', desc: 'Text text text', listens: 0, cover: 'http://localhost:5000/image/5c90134e-f144-40a5-bbad-47fc42b24aa9.jpg', audio: 'http://localhost:5000/audio/0c861925-3831-4790-a59b-c02cb6efdbe3.mp3', comments: []};

  const router = useRouter();
  const [track, setTrack] = useState(serverTrack);

  return (
    <MainLayout>
      <Button 
        className={styles.track_detail__back_btn} 
        variant={'outlined'} 
        onClick={() => router.push('/tracks')}
      >
        Назад
      </Button>
      <Grid container className={styles.track_detail__content}>
        <img src={`http://localhost:5000/${track.cover}`} width={200} height={200} />
        <div className={styles.track_detail__headers}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.desc}</p>
      <h2>Оставить комментарий</h2>
      <Grid container>
        <TextField 
          label="Ваше имя"
          fullWidth
        />
        <TextField 
          label="Комментарий"
          fullWidth
          multiline
          rows={4}
        />
        <Button>Отправить</Button>
      </Grid>
      <h2>Комментарии</h2>
      <div>
        {track.comments.map((comment: IComment) =>
          <div>
            <div>{comment.username}</div>
            <div>{comment.desc}</div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default TrackDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:5000/tracks/${params.id}`);
  return {
    props: {
      serverTrack: res.data
    }
  }
}