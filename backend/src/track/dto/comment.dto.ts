import { ObjectId } from 'mongoose';

export class CreateCommentDto {
  readonly username: string;
  readonly desc: string;
  readonly trackId: ObjectId;
}