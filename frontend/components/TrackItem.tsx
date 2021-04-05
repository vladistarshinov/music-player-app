import { Card, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { ITrack } from '../types/tracks';
import styles from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/useActions';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (e) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  }

  return (
    <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={play}>
        {active 
        ? <Pause />
        : <PlayArrow />
        }
      </IconButton>
      <img width={70} height={70} src={track.cover}/>
      <Grid container direction="column" className={styles.track__data}>
        <div>{track.name}</div>
        <div className={styles.track__artist}>{track.artist}</div>
      </Grid>
      {active && <div>02:11 / 03:11</div>}
      <IconButton onClick={e => e.stopPropagation()} className={styles.track__delete}>
        <Delete />
      </IconButton>
    </Card>
  )
}
