import { Action } from "redux";
import { ITrack } from "../../../types/tracks";
import { PlayerActionTypes } from "../../constants/player.constants";

export interface IPlayActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.PLAY;
};

export interface IPauseActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.PAUSE;
};

export interface ISetActiveTrackActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_ACTIVE_TRACK;
  payload: ITrack;
};

export interface ISetTrackDurationActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_TRACK_DURATION,
  payload: number;
};

export interface ISetCurrentTimeActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_CURRENT_TIME,
  payload: number;
};

export interface ISetTrackVolumeActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_TRACK_VOLUME,
  payload: number;
};

export type PlayerAction = 
  | IPlayActionInterface
  | IPauseActionInterface
  | ISetActiveTrackActionInterface
  | ISetTrackDurationActionInterface
  | ISetCurrentTimeActionInterface
  | ISetTrackVolumeActionInterface;