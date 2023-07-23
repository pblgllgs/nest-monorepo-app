export class ResponseDto {
  token: string;
  url: string;
}

export class SendDto {
  buy_order: string;
  session_id: string;
  amount: number;
  return_url: string;
}
