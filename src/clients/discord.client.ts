import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Client, WebhookClient } from 'discord.js';
import {
    ModuleOptionsChannelsInterface,
    ModuleOptionsGuildsInterface,
    ModuleOptionsInterface, ModuleOptionsManagementInterface,
    ModuleOptionsSettingsInterface,
    ModuleOptionsWebhookInterface
} from '../interfaces';

@Injectable()
export class DiscordClient extends Client implements OnApplicationBootstrap {

    /**
     * Module general settings object
     * @type { ModuleOptionsSettingsInterface }
     * @private
     */
    private readonly _settings: ModuleOptionsSettingsInterface;

    /**
     * Module channels settings object
     * @private
     */
    private readonly _channels: ModuleOptionsChannelsInterface;

    /**
     * Module guilds settings object
     * @private
     */
    private readonly _guilds: ModuleOptionsGuildsInterface;

    /**
     * Module management settings object
     * @type { ModuleOptionsManagementInterface }
     * @private
     */
    private readonly _management: ModuleOptionsManagementInterface;

    /**
     * Module webhook settings object
     * @type { ModuleOptionsWebhookInterface | undefined }
     * @private
     */
    private readonly _webhook?: ModuleOptionsWebhookInterface;

    /**
     * Webhook client instance
     * @type { WebhookClient | undefined }
     * @private
     */
    private _webhookClient?: WebhookClient;

    /**
     * DiscordClient constructor
     * @param { ModuleOptionsInterface } options
     */
    constructor(options: ModuleOptionsInterface) {
        const {
            settings,
            guilds,
            channels,
            management,
            webhook,
            ...discordOptions
        } = options;
        super(discordOptions);
        this._settings = settings;
        this._channels = channels ?? { allowed: [], ignored: [] };
        this._guilds = guilds ?? { allowed: [], ignored: [] };
        this._management = management ?? { administrators: [], moderators: [], support: [] };
        this._webhook = webhook;
    }

    /**
     * Run code on application bootstrap
     * @return { Promise<void> }
     */
    async onApplicationBootstrap(): Promise<void> {
        // await this.login(this.settings.token);
        console.log(this);
        this.initializeWebhookClient();
    }

    /**
     * Get command prefix from settings object
     * @return { string }
     */
    public commandPrefix(): string {
        return this._settings.prefix;
    }

    /**
     * Get bot owner id from settings object
     * @return { string }
     */
    public botOwner(): string {
        return this._settings.owner_id;
    }

    /**
     * Get bot administrators team
     * @return { string[] }
     */
    public administrators(): string[] {
        return this._management.administrators;
    }

    /**
     * Get bot moderators team
     * @return { string[] }
     */
    public moderators(): string[] {
        return this._management.moderators;
    }

    /**
     * Get bot support team
     * @return { string[] }
     */
    public support(): string[] {
        return this._management.support;
    }

    /**
     * Get webhook client instance
     * @return { WebhookClient | undefined }
     */
    public webhookClient(): WebhookClient|undefined {
        return this._webhookClient;
    }

    /**
     * Check if user is a bot owner
     * @param { string } userID
     * @return { boolean }
     */
    public isBotOwner(userID: string): boolean {
        return this.botOwner().trim() === userID.trim();
    }

    /**
     * Check whether specified channel should be allowed by bot
     * @param { string } channelID
     * @return { boolean }
     */
    public isChannelAllowed(channelID: string): boolean {
        if (this._channels.allowed.length === 0) {
            return true;
        }
        return this._channels.allowed.includes(channelID);
    }

    /**
     * Check whether specified channel should be ignored by bot
     * @param { string } channelID
     * @return { boolean }
     */
    public isChannelIgnored(channelID: string): boolean {
        if (this._channels.ignored.length === 0) {
            return false;
        }
        return this._channels.ignored.includes(channelID);
    }

    /**
     * Check whether specified guild should be allowed by bot
     * @param { string } guildID
     * @return { boolean }
     */
    public isGuildAllowed(guildID: string): boolean {
        if (this._guilds.allowed.length === 0) {
            return true;
        }
        return this._guilds.allowed.includes(guildID);
    }

    /**
     * Check whether specified guild should be ignored by bot
     * @param { string } guildID
     * @return { boolean }
     */
    public isGuildIgnored(guildID: string): boolean {
        if (this._guilds.ignored.length === 0) {
            return false;
        }
        return this._guilds.ignored.includes(guildID);
    }

    /**
     * Check if user belongs to administrators team
     * @param { string } userID
     * @return { boolean }
     */
    public isAdministrator(userID: string): boolean {
        return this._management.administrators.includes(userID);
    }

    /**
     * Check if user belongs to moderators team
     * @param { string } userID
     * @return { boolean }
     */
    public isModerator(userID: string): boolean {
        return this._management.moderators.includes(userID);
    }

    /**
     * Check if user belongs to support team
     * @param { string } userID
     * @return { boolean }
     */
    public isSupport(userID: string): boolean {
        return this._management.support.includes(userID);
    }

    /**
     * Initialize webhook client if it is configured by the user
     * @return { void }
     * @private
     */
    private initializeWebhookClient(): void {
        if (this._webhook) {
            this._webhookClient = new WebhookClient(
                this._webhook.id,
                this._webhook.token,
                this._webhook.options ?? {}
            );
        }
    }

}
