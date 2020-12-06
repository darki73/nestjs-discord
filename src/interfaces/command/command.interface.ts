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
    readonly enabled: boolean;

    /**
     * Command name
     * @type { string }
     */
    readonly name: string;

    /**
     * Command description
     * @type { string | undefined }
     */
    readonly description?: string;

    /**
     * Command aliases
     * @type { string[] }
     */
    readonly aliases: string[];

    /**
     * Command category
     * @type { string | undefined }
     */
    readonly category?: string;

    /**
     * List of command parameters
     * @type { CommandParameterInterface[] }
     */
    readonly parameters: CommandParameterInterface[];

}
