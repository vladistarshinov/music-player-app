import { Body, Controller, Get, Post, Delete, Param, Patch } from "@nestjs/common";
import { CreateTrackDto, UpdateTrackDto } from "./dto/track.dto";
import { TrackService } from "./track.service";
import { ObjectId } from 'mongoose';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  createTrack(@Body() dto: CreateTrackDto) {
    return this.trackService.createTrack(dto);
  }

  @Get()
  fetchAllTracks() {
    return this.trackService.fetchAllTracks();
  }

  @Get(':id')
  fetchTrack(@Param('id') id: ObjectId) {
    return this.trackService.fetchTrack(id);
  }

  @Patch(':id')
  updateTrack(@Param('id') id: ObjectId, @Body() dto: UpdateTrackDto) {
    return this.trackService.updateTrack(id, dto);
  }


  @Delete(':id')
  deleteTrack(@Param('id') id: ObjectId) {
    return this.trackService.deleteTrack(id);
  }

}