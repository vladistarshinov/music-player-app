import { ITrack } from "../../types/tracks";

export interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  play: boolean;
}