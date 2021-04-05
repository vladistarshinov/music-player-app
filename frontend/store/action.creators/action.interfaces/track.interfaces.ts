import { ITrack } from "../../../types/tracks";
import { TrackActionTypes } from "../../constants/track.constants";

interface FetchTrackSuccessAction {
  type: TrackActionTypes.FETCH_TRACKS_SUCCESS;
  payload: ITrack[];
}

interface FetchTrackErrorAction {
  type: TrackActionTypes.FETCH_TRACKS_ERROR;
  payload: string;
}

export type TrackAction = 
  | FetchTrackSuccessAction
  | FetchTrackErrorAction