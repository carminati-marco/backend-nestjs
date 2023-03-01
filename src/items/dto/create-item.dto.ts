import {
  IsUrl,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateItemDto {
  title: string;

  description: string;

  @IsOptional()
  @IsUrl({})
  picture: string;

  @IsOptional()
  @IsUrl({})
  link: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  discount: number;
}
