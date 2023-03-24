import { Factory } from 'fishery';

import { Transaction } from '../../../generated/openapi';

export const transactionFactory = Factory.define<Transaction>(({ sequence }) => ({
    id: `transaction-id-${sequence}`,
    amount: 5 * sequence,
    date: '2023-03-21T18:49:13.620Z',
    description: `Transaction description for transaction ${sequence}`,
}));
