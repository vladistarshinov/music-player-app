import { ITrack } from "../../types/tracks";
import { PlayerActionTypes } from "../constants/player.constants";
import { PlayerAction } from "./action.interfaces/player.interfaces";

export const playTrack = (): PlayerAction => {
  return { type: PlayerActionTypes.PLAY };
};

export const pauseTrack = (): PlayerAction => {
  return { type: PlayerActionTypes.PAUSE };
};

export const setTrackDuration = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_TRACK_DURATION, payload };
};

export const setTrackVolume = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_TRACK_VOLUME, payload };
};

export const setCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};

export const setActiveTrack = (payload: ITrack): PlayerAction => {
  return { type: PlayerActionTypes.SET_ACTIVE_TRACK, payload };
};