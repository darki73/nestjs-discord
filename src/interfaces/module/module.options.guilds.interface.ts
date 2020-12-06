/**
 * Interface ModuleOptionsGuildsInterface
 */
export interface ModuleOptionsGuildsInterface {

    /**
     * List of guilds bot is allowed to interact
     * @type { string }
     */
    allowed: string[];

    /**
     * List of guilds bot is not allowed to interact
     * @type { string }
     */
    ignored: string[];

}
