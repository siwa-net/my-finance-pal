import is from '@sindresorhus/is';
import { z } from 'zod';

export const optionalDateSchema = z
    .string()
    .datetime()
    .optional()
    .transform((dataString) => (!is.undefined(dataString) ? new Date(dataString) : dataString));
