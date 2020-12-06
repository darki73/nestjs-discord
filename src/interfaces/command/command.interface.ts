import { CommandParameterInterface } from './command.parameter.interface';

/**
 * Interface CommandInterface
 */
export interface CommandInterface {

    /**
     * Whether or not command is enabled
     * @type { boolean }
     * @default true
     */
    enabled: boolean;

    /**
     * Command name
     * @type { string }
     */
    name: string;

    /**
     * Command description
     * @type { string | undefined }
     */
    description?: string;

    /**
     * Command aliases
     * @type { string[] }
     */
    aliases: string[];

    /**
     * Command category
     * @type { string | undefined }
     */
    category?: string;

    /**
     * List of command parameters
     */
    parameters: CommandParameterInterface[];

}
