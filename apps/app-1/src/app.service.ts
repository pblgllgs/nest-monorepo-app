import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ResponseDto, SendDto } from './dto/dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from port 3001!';
  }

  async getCredentials(
    body: SendDto,
    header1: string,
    header2: string,
  ): Promise<ResponseDto> {
    const headers = {
      'Content-Type': 'application/json',
      'Tbk-Api-Key-Id': header1,
      'Tbk-Api-Key-Secret': header2,
    };

    const response = await axios.post(
      'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions',
      body,
      { headers },
    );
    return response.data;
  }
}
