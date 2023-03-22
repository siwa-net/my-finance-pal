import { randomUUID } from 'crypto';

import { Factory } from 'fishery';

import { Budget } from '../../../generated/openapi';

export const budgetFactory = Factory.define<Budget>(({ sequence }) => {
    const limit = 200 + (sequence - 1) * 50;

    return {
        id: randomUUID(),
        startDate: '2023-02-21T18:49:13.620Z',
        endDate: '2023-03-21T18:49:13.620Z',
        name: 'Budget-' + sequence,
        limit,
        spent: limit - Math.min(limit, sequence * 50),
    };
});
