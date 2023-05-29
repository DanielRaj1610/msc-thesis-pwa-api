import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly postService: AppService) {}

  @Get()
  getHello(): string {
    return this.postService.getHello();
  }
}
