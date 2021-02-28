import { Card, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { ITrack } from '../types/tracks';
import styles from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@material-ui/icons';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Card className={styles.track}>
      <IconButton>
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
      <IconButton className={styles.track__delete}>
        <Delete />
      </IconButton>
    </Card>
  )
}
