import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDto, SendDto } from './dto/dto';

@Controller('tbk')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello(): string {
    return this.appService.getHello();
  }

  @Post('/getCredentials')
  getCredentials(
    @Headers('Tbk-Api-Key-Id') header1: string,
    @Headers('Tbk-Api-Key-Secret') header2: string,
    @Body() body: SendDto,
  ): Promise<ResponseDto> {
    return this.appService.getCredentials(body, header1, header2);
  }
}
