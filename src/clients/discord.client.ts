import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Client } from 'discord.js';
import {
    ModuleOptionsChannelsInterface,
    ModuleOptionsGuildsInterface,
    ModuleOptionsInterface,
    ModuleOptionsSettingsInterface
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
     * DiscordClient constructor
     * @param { ModuleOptionsInterface } options
     */
    constructor(options: ModuleOptionsInterface) {
        const {
            settings,
            guilds,
            channels,
            ...discordOptions
        } = options;
        super(discordOptions);
        this._settings = settings;
        this._channels = channels ?? { allowed: [], ignored: [] };
        this._guilds = guilds ?? { allowed: [], ignored: [] };
    }

    /**
     * Run code on application bootstrap
     * @return { Promise<void> }
     */
    async onApplicationBootstrap(): Promise<void> {
        // await this.login(this.settings.token);
        console.log(this);
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

}
