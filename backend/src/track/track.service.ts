import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from "./schemas/track.schema";
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { CreateTrackDto, UpdateTrackDto } from "./dto/track.dto";
import { CreateCommentDto } from "./dto/comment.dto";
import { FileService, FileType } from "src/file/file.service";

@Injectable()
export class TrackService {
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
              @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
              private fileService: FileService) {}

  async createTrack(dto: CreateTrackDto, cover, audio): Promise<Track> {
    const coverPath = this.fileService.createFile(FileType.IMAGE, cover);
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const track = await this.trackModel.create({...dto, listens: 0, cover: coverPath, audio: audioPath});
    return track;
  }

  async fetchAllTracks(count: number = 10, offset: number = 0): Promise<Track[]> {
    const tracks = await this.trackModel.find().skip(Number(offset)).limit(Number(count));
    return tracks;
  }

  async fetchTrack(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');
    return track;
  }

  async searchTrack(query: string): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: {$regex: new RegExp(query, 'i')}
    });
    return tracks;
  }

  async updateTrack(id: ObjectId, dto: UpdateTrackDto): Promise<Track> {
    const trackUpdate = await this.trackModel.findByIdAndUpdate(id, dto);
    return trackUpdate;
  }

  async removeTrack(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({...dto});
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }

  async updateCountOfListen(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens++;
    track.save();
  }

}