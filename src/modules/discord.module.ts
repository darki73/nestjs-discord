import { DynamicModule, Module, Provider } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { DISCORD_MODULE_OPTIONS } from '../constants';
import { DiscordClient } from '../clients';
import {
    ModuleOptionsAsyncInterface,
    ModuleOptionsFactoryInterface,
    ModuleOptionsInterface
} from '../interfaces';
import { DiscordService } from '../services';

@Module({
    imports: [
        DiscoveryModule
    ]
})
export class DiscordModule {

    /**
     * Configure module in the synchronous style
     * @param { ModuleOptionsInterface } options
     * @return { DynamicModule }
     */
    static forRoot(options: ModuleOptionsInterface): DynamicModule {
        return {
            module: DiscordModule,
            providers: [

                DiscordService,
                ...DiscordModule.createSynchronousProviders(options),
            ],
            exports: [
                DiscordClient,
            ]
        };
    }

    /**
     * Configure module in the asynchronous style
     * @param { ModuleOptionsAsyncInterface } options
     * @return { DynamicModule }
     */
    static forRootAsync(options: ModuleOptionsAsyncInterface): DynamicModule {
        const connectionProvider: Provider = {
            provide: DiscordClient,
            useFactory: async (moduleOptions: ModuleOptionsInterface): Promise<DiscordClient> => {
                return new DiscordClient(moduleOptions);
            },
            inject: [DISCORD_MODULE_OPTIONS]
        };

        return {
            module: DiscordModule,
            providers: [

                DiscordService,
                DiscordModule.createAsynchronousProvider(options),
                connectionProvider,
            ],
            exports: [
                DiscordClient,
            ]
        };
    }

    /**
     * Create synchronous provider
     * @param { ModuleOptionsInterface } options
     * @return { Provider[] }
     * @private
     */
    private static createSynchronousProviders(options: ModuleOptionsInterface): Provider[] {
        return [
            <Provider> {
                provide: DISCORD_MODULE_OPTIONS,
                useValue: options || {},
            },
            <Provider> {
                provide: DiscordClient,
                useValue: new DiscordClient(options),
            },
            DiscordService
        ];
    }

    /**
     * Create asynchronous provider
     * @param { ModuleOptionsAsyncInterface } options
     * @return { Provider }
     * @private
     */
    private static createAsynchronousProvider(options: ModuleOptionsAsyncInterface): Provider {
        if (options) {
            if (options.useFactory) {
                return <Provider> {
                    provide: DISCORD_MODULE_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject || []
                };
            }
            return <Provider> {
                provide: DISCORD_MODULE_OPTIONS,
                useFactory: async (optionsFactory: ModuleOptionsFactoryInterface): Promise<ModuleOptionsInterface> => {
                    return optionsFactory.createDiscordOptions();
                },
                inject: [ options.useExisting || options.useClass ]
            };
        }
        return <Provider> {
            provide: DISCORD_MODULE_OPTIONS,
            useValue: {}
        };
    }

}
