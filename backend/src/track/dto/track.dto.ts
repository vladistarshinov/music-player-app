export class CreateTrackDto {
  readonly name;
  readonly artist;
  readonly desc;
}

export class UpdateTrackDto {
  readonly name;
  readonly artist;
  readonly desc;
  readonly listens;
}