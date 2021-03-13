import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import React from 'react';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';

const Player = () => {
  const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', desc: 'Text text text', listens: 0, cover: 'http://localhost:5000/image/5c90134e-f144-40a5-bbad-47fc42b24aa9.jpg', audio: 'http://localhost:5000/audio/0c861925-3831-4790-a59b-c02cb6efdbe3.mp3', comments: []};
  const active: boolean = false;
  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active 
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      <TrackProgress leftValue={0} rightValue={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress leftValue={0} rightValue={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
