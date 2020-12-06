import { ModuleOptionsSettingsInterface } from './module.options.settings.interface';
import { ModuleOptionsChannelsInterface } from './module.options.channels.interface';
import { ModuleOptionsGuildsInterface } from './module.options.guilds.interface';
import { ModuleOptionsWebhookInterface } from './module.options.webhook.interface';

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
     * @type { ModuleOptionsChannelsInterface | undefined }
     */
    channels?: ModuleOptionsChannelsInterface;

    /**
     * Guilds configuration for bot
     * @type { ModuleOptionsGuildsInterface | undefined }
     */
    guilds?: ModuleOptionsGuildsInterface;

    /**
     * Webhook configuration for bot
     * @type { ModuleOptionsWebhookInterface | undefined }
     */
    webhook?: ModuleOptionsWebhookInterface

}
