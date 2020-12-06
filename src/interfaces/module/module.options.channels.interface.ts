/**
 * Interface ModuleOptionsChannelsInterface
 */
export interface ModuleOptionsChannelsInterface {

    /**
     * List of channels bot is allowed to interact
     * @type { string }
     */
    allowed: string[];

    /**
     * List of channels bot is not allowed to interact
     * @type { string }
     */
    ignored: string[];

}
