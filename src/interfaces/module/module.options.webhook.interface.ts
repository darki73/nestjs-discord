import { ModuleOptionsWebhookOptionsInterface } from './module.options.webhook.options.interface';

export interface ModuleOptionsWebhookInterface {

    /**
     * Webhook id
     * @type { string }
     */
    id: string;

    /**
     * Webhook token
     * @type { string }
     */
    token: string;

    /**
     * Webhook options
     * @type { ModuleOptionsWebhookOptionsInterface | undefined }
     */
    options?: ModuleOptionsWebhookOptionsInterface;

}
