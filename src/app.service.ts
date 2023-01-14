import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('PG') private clientPg: Client,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) reject(err);
        resolve(res.rows);
      });
    });
  }

  async getHello() {
    return {
      message: 'Hello World!',
      apiKey: this.configService.apiKey,
      dbName: this.configService.database.name,
      dbPort: this.configService.database.port,
      tasks: await this.getTasks(),
    };
  }
}
