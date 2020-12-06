import { DiscordClient } from '../../clients';
import { Message } from 'discord.js';

/**
 * Interface EventInterface
 */
export interface EventInterface {

    /**
     * Event name
     * @type { string }
     */
    name: string;

    /**
     * Event handler
     * @param { DiscordClient } client
     * @param { Message | undefined } message
     * @return { Promise<any> }
     */
    handler: (client: DiscordClient, message?: Message) => Promise<any>;

}
