import { Factory } from 'fishery';

import { Expense } from '../../../generated/openapi';

export const expenseFactory = Factory.define<Expense>(({ sequence }) => ({
    id: `expense-id-${sequence}`,
    amount: 5 * sequence,
    date: '2023-03-21T18:49:13.620Z',
    description: `Expense description for expense ${sequence}`,
}));
