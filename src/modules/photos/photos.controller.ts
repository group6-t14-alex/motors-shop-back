import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Request,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Photo } from './entities/photo.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePhotoDto } from './dto/create-photo.dto';

@ApiTags('Photos')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @ApiCreatedResponse({ type: Photo })
  // @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() CreatePhotoDto: CreatePhotoDto, @Request() req: any) {
    return this.photosService.create(CreatePhotoDto, req.user.id);
  }

  @ApiOkResponse({ type: Photo, isArray: true })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.photosService.findAll();
  }

  @ApiOkResponse({ type: Photo })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(+id);
  }

  @ApiOkResponse({ type: Photo })
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhotoDto: UpdatePhotoDto,
    @Request() req: any,
  ) {
    return this.photosService.update(+id, updatePhotoDto, req.user.id);
  }

  @ApiNoContentResponse({ description: 'No Content' })
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
