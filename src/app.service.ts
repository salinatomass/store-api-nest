import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello() {
    return {
      message: 'Hello World!',
      apiKey: this.configService.apiKey,
      dbName: this.configService.database.name,
      dbPort: this.configService.database.port,
      tasks: this.tasks,
    };
  }
}
