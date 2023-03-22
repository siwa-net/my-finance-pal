import { Factory } from 'fishery';

import { Budget } from '../../../generated/openapi';

const budgetFactory = Factory.define<Budget>(({ sequence }) => ({
    id: sequence.toString(),
    name: `Budget-${sequence}`,
    limit: 500,
    spent: 250,
    startDate: '2022-03-21T18:49:13.620Z',
    endDate: '2023-03-21T18:49:13.620Z',
}));

export const budgetsMock = budgetFactory.buildList(5);
