import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';

let audio;

const Player = () => {
  // const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', desc: 'Text text text', listens: 0, cover: 'http://localhost:5000/image/5c90134e-f144-40a5-bbad-47fc42b24aa9.jpg', audio: 'http://localhost:5000/audio/0c861925-3831-4790-a59b-c02cb6efdbe3.mp3', comments: []};
  //const active: boolean = false;
  const { play, volume, active, currentTime, duration } = useTypedSelector(state => state.player)
  const { playTrack, pauseTrack, setTrackVolume, setCurrentTime, setTrackDuration, setActiveTrack } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      actionForPlayer();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = `http://localhost:5000/${active.audio}`;
      audio.volume = volume / 100;
      // onloadedmetadata - flag when track was loaded
      audio.onloadedmetadata = () => {
        setTrackDuration(Math.ceil(audio.duration));
      }
      // ontimeupdate - every change of time
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      }
    }
  };

  const actionForPlayer = () => {
    if (play) {
      pauseTrack();
      audio.play();
    } else {
      playTrack();
      audio.pause();
    }
  };

  const changeTrackVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setTrackVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={actionForPlayer}>
        {play 
          ? <PlayArrow />
          : <Pause />
        }
      </IconButton>
      <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
      </Grid>
      <TrackProgress leftValue={currentTime} rightValue={duration} onChange={changeCurrentTime} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress leftValue={volume} rightValue={100} onChange={changeTrackVolume} />
    </div>
  );
};

export default Player;
