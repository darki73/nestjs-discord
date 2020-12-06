import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class DiscordService implements OnApplicationBootstrap {

    async onApplicationBootstrap(): Promise<void> {

    }

}
