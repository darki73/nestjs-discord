/**
 * Interface ModuleOptionsManagementInterface
 */
export interface ModuleOptionsManagementInterface {

    /**
     * ID's of people who belong to the `administrators`
     * @type { string[] }
     */
    administrators: string[];

    /**
     * ID's of people who belong to the `moderators`
     * @type { string[] }
     */
    moderators: string[];

    /**
     * ID's of people who belong to the `support`
     * @type { string[] }
     */
    support: string[];

}
