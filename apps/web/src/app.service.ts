import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: "app",
        port: 4000,
      },
    })

  }

  getHello(): Promise<string> {
    return  firstValueFrom(this.client.send<string, string>('greeting', 'Antonio Hauren'));
  }
}
