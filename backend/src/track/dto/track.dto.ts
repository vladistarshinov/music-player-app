export class CreateTrackDto {
  readonly name: string;
  readonly artist: string;
  readonly desc: string;
}

export class UpdateTrackDto {
  readonly name: string;
  readonly artist: string;
  readonly desc: string;
  readonly listens: number;
}