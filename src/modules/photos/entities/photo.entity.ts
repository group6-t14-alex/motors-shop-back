import { ApiProperty } from '@nestjs/swagger';

export class Photo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  src: string;
}
