import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from "./schemas/track.schema";
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { CreateTrackDto, UpdateTrackDto } from "./dto/track.dto";

@Injectable()
export class TrackService {
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
              @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

  async createTrack(dto: CreateTrackDto): Promise<Track> {
    const track = await this.trackModel.create({...dto, listens: 0});
    return track;
  }

  async fetchAllTracks(): Promise<Track[]> {
    const tracks = await this.trackModel.find();
    return tracks;
  }

  async fetchTrack(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id);
    return track;
  }

  async updateTrack(id: ObjectId, dto: UpdateTrackDto): Promise<Track> {
    const trackUpdate = await this.trackModel.findByIdAndUpdate(id, dto);
    return trackUpdate;
  }

  async deleteTrack(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }

}