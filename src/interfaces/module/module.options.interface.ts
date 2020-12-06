import { ModuleOptionsSettingsInterface } from './module.options.settings.interface';
import { ModuleOptionsChannelsInterface } from './module.options.channels.interface';
import { ModuleOptionsGuildsInterface } from './module.options.guilds.interface';

/**
 * Interface ModuleOptionsInterface
 */
export interface ModuleOptionsInterface {

    /**
     * Discord bot general settings
     * @type { ModuleOptionsSettingsInterface }
     */
    settings: ModuleOptionsSettingsInterface;

    /**
     * Channels configuration for bot
     * @type { ModuleOptionsChannelsInterface }
     */
    channels?: ModuleOptionsChannelsInterface;

    /**
     * Guilds configuration for bot
     * @type { ModuleOptionsGuildsInterface }
     */
    guilds?: ModuleOptionsGuildsInterface;

}
