import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private config: ConfigService,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello() {
    return {
      message: 'Hello World!',
      apiKey: this.config.get('API_KEY'),
      database: this.config.get('DATABASE_NAME'),
      tasks: this.tasks,
    };
  }
}
