import axios from "axios"
import { Dispatch } from "react"
import { TrackActionTypes } from "../constants/track.constants"
import { TrackAction } from "./action.interfaces/track.interfaces"

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/tracks');
      dispatch({ 
        type: TrackActionTypes.FETCH_TRACKS_SUCCESS, 
        payload: response.data,
      })
    } catch (e) {
      dispatch({ 
        type: TrackActionTypes.FETCH_TRACKS_ERROR, 
        payload: 'При загрузке треков произошла ошибка!',
      })
    }
  }
}