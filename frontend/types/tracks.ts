export interface IComment {
  _id: string;
  username: string;
  desc: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  desc: string;
  listens: number;
  cover: string;
  audio: string;
  comments: IComment[];
}