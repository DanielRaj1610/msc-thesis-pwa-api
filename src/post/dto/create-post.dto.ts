import { ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty()
  readonly id: string;
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly location: string;
  @ApiProperty()
  readonly image: string;
}
