import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';
import { Post as PostI } from './schemas/post.schema';
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  async create(@Body() createCatDto: CreatePostDto) {
    await this.postService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<PostI[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostI> {
    return this.postService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(id);
  }
}
