import { ModuleMetadata, Type } from '@nestjs/common';
import { ModuleOptionsFactoryInterface } from './module.options.factory.interface';
import { ModuleOptionsInterface } from './module.options.interface';

/**
 * Interface ModuleOptionsAsyncInterface
 */
export interface ModuleOptionsAsyncInterface extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<ModuleOptionsFactoryInterface>;
    useClass?: Type<ModuleOptionsFactoryInterface>;
    useFactory?: (...args: any[]) => Promise<ModuleOptionsInterface> | ModuleOptionsInterface;
    inject?: any[];
}
