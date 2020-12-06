import { Message } from 'discord.js';
import { DiscordClient } from '../clients';
import { stringFormat } from '../helpers';
import { CommandInterface, CommandParameterInterface } from '../interfaces';

/**
 * Class AbstractCommand
 */
export abstract class AbstractCommand implements CommandInterface {

    /**
     * Whether or not command is enabled
     * @type { boolean }
     * @default true
     */
    readonly enabled: boolean = true;

    /**
     * Command name
     * @type { string }
     */
    readonly abstract name: string;

    /**
     * Command description
     * @type { string | undefined }
     */
    readonly description?: string = undefined;

    /**
     * Command aliases
     * @type { string[] }
     */
    readonly aliases: string[] = [];

    /**
     * Command category
     * @type { string | undefined }
     */
    readonly category?: string = undefined;

    /**
     * List of command parameters
     * @type { CommandParameterInterface[] }
     */
    readonly parameters: CommandParameterInterface[] = [];

    /**
     * Handle incoming command
     * @param { DiscordClient } client
     * @param { Message } message
     */
    public abstract handle(client: DiscordClient, message: Message): Promise<any>;

    /**
     * Get command usage string
     * @return { string }
     */
    public usage(): string {
        const usageArray: string[] = [this.name];
        this.parameters.forEach((parameter: CommandParameterInterface): void => {
            let commandFormat = '({0}:{1})'
            if (parameter.required) {
                commandFormat = '[{0}:{1}]';
            }
            usageArray.push(stringFormat(commandFormat, parameter.name, parameter.type));
        });
        return usageArray.join(' ');
    }

}
