import { Factory } from 'fishery';

import { expenseFactory } from './expense.factories';
import { Budget, BudgetSummary } from '../../../generated/openapi';

export const budgetFactory = Factory.define<Budget>(({ sequence }) => {
    const limit = 200 + (sequence - 1) * 50;

    return {
        id: `budget-mock-id-${sequence}`,
        startDate: '2023-02-21T18:49:13.620Z',
        endDate: '2023-03-21T18:49:13.620Z',
        name: 'Budget-' + sequence,
        limit,
        spent: limit - Math.min(limit, sequence * 50),
    };
});

export const budgetSummaryFactory = Factory.define<BudgetSummary>(({ sequence }) => {
    const limit = 200 + (sequence - 1) * 50;

    const expenses = expenseFactory.buildList(5);
    expenseFactory.rewindSequence();

    return {
        id: `budget-mock-id-${sequence}`,
        startDate: '2023-02-21T18:49:13.620Z',
        endDate: '2023-03-21T18:49:13.620Z',
        name: 'Budget-' + sequence,
        limit,
        expenses,
    };
});
