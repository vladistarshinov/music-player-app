import { PlayerAction } from "../action.creators/action.interfaces/player.interfaces";
import { PlayerActionTypes } from "../constants/player.constants";
import { PlayerState } from "../types/player.state";

const initialState: PlayerState = {
  play: false,
  active: null,
  volume: 0,
  currentTime: 0,
  duration: 0,
};

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {

    case PlayerActionTypes.PLAY:
      return { ...state, play: true };
    case PlayerActionTypes.PAUSE:
      return { ...state, play: false };
    case PlayerActionTypes.SET_ACTIVE_TRACK:
      return { ...state, active: action.payload, currentTime: 0, duration: 0 };
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionTypes.SET_TRACK_DURATION:
      return { ...state, duration: action.payload };
    case PlayerActionTypes.SET_TRACK_VOLUME:
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};