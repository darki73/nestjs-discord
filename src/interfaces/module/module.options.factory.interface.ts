import { ModuleOptionsInterface } from './module.options.interface';

/**
 * Interface ModuleOptionsFactoryInterface
 */
export interface ModuleOptionsFactoryInterface {

    /**
     * Create discord options object
     * @return { Promise<ModuleOptionsInterface> | ModuleOptionsInterface }
     */
    createDiscordOptions(): Promise<ModuleOptionsInterface> | ModuleOptionsInterface;

}
