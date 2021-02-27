import { Body, Controller, Get, Post, Delete, Param, Patch, UseInterceptors, UploadedFiles } from "@nestjs/common";
import { CreateTrackDto, UpdateTrackDto } from "./dto/track.dto";
import { TrackService } from "./track.service";
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from "./dto/comment.dto";
import { FileFieldsInterceptor } from "@nestjs/platform-express";

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'cover', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  createTrack(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    const { cover, audio } = files;
    return this.trackService.createTrack(dto, cover[0], audio[0]);
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
  removeTrack(@Param('id') id: ObjectId) {
    return this.trackService.removeTrack(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  @Post('/listen/:id')
  updateCountOfListen(@Param('id') id: ObjectId) {
    return this.trackService.updateCountOfListen(id);
  }

}