import { TrackState } from "../types/track.state";
import { TrackAction } from "../action.creators/action.interfaces/track.interfaces"
import { TrackActionTypes } from "../constants/track.constants";

const initialState: TrackState = {
  tracks: [],
  error: '',
}

export const trackReducer = (state: TrackState = initialState, action: TrackAction): TrackState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS_SUCCESS:
      return { error: '', tracks: action.payload };
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}