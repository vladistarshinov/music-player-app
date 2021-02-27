import { Controller, Get } from "@nestjs/common";
import { TrackService } from "./track.service";

@Controller('/tracks')
export class TrackController {

  createTrack() {

  }

  @Get()
  fetchAllTracks() {
    return 'GET ALL TRACKS';
  }

  fetchTrack() {

  }

  deleteTrack() {
    
  }

}