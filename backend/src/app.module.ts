import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:12345@cluster0.yexrw.mongodb.net/music-player?retryWrites=true&w=majority'),
    TrackModule
  ]
})

export class AppModule {}