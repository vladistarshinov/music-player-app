import { ITrack } from "../../types/tracks";

export interface TrackState {
  tracks: ITrack[];
  error: string;
}