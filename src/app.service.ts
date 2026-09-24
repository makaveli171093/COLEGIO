import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getInfo() {
    return {
      school: this.configService.get<string>('SCHOOL_NAME'),
      environment: this.configService.get<string>('NODE_ENV'),
      status: 'ok',
    };
  }
}
