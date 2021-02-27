import { Module } from "@nestjs/common";
import { TrackService } from "./track.service";
import { TrackController } from "./track.controller";
import { Track, TrackSchema } from "./schemas/track.schema";
import { Comment, CommentSchema } from "./schemas/comment.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])
  ],
  controllers: [TrackController],
  providers: [TrackService]
})

export class TrackModule {}