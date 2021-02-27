import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album, AlbumDocument } from "./schema/album.schema";

@Injectable()
export class AlbumService {
  constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {}
}