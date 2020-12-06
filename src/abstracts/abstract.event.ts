import { Message } from "discord.js";
import { DiscordClient } from '../clients';
import { EventInterface } from '../interfaces';

/**
 * Class AbstractEvent
 */
export abstract class AbstractEvent implements EventInterface {

    /**
     * Event name
     * @type { string }
     */
    abstract name: string;

    /**
     * Event handler
     * @param { DiscordClient } client
     * @param { Message | undefined } message
     * @return { Promise<any> }
     */
    public abstract handler: (client: DiscordClient, message?: Message) => Promise<any>;

}
