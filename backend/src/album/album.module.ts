import { Module } from "@nestjs/common";
import { AlbumService } from "./album.service";
import { AlbumController } from "./album.controller";
import { Album, AlbumSchema } from "./schema/album.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }])
  ],
  controllers: [AlbumController],
  providers: [AlbumService]
})

export class AlbumModule {}