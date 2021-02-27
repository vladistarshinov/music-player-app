import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import * as path from 'path';
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:<password>@cluster0.yexrw.mongodb.net/music-player?retryWrites=true&w=majority'),
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    TrackModule,
    FileModule
  ]
})

export class AppModule {}