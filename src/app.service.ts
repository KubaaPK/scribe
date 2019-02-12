import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): {success: boolean, message: string} {
    return {
      success: true,
      message: 'Welcome to Scribe API v1.',
    };
  }
}
