import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tbk')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello(): string {
    return this.appService.getHello();
  }
}
