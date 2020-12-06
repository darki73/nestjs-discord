import { ParameterType } from '../../types';

/**
 * Interface CommandParameterInterface
 */
export interface CommandParameterInterface {

    /**
     * Whether this parameter is required
     * @default false
     */
    required: boolean;

    /**
     * Parameter name
     * @type { string }
     */
    name: string;

    /**
     * Parameter type
     * @default string
     */
    type: ParameterType

}
