import { ApiProperty } from '@nestjs/swagger';

export class Comment {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  comment: string;

  @ApiProperty()
  created_at: Date;
}
