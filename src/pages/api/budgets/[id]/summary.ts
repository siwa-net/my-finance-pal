import is from '@sindresorhus/is';

import { BudgetSummary } from '../../../../generated/openapi';
import { budgetSummaryFactory } from '../../factories/budget.factories';

import type { NextApiRequest, NextApiResponse } from 'next';

const budgetSummaryMock = budgetSummaryFactory.buildList(8);

export default function handler(req: NextApiRequest, res: NextApiResponse<BudgetSummary>) {
    const { query, method } = req;
    const id = query.id as string;

    switch (method) {
        case 'GET':
            const targetBudget = budgetSummaryMock.find(({ id: budgetId }) => budgetId === id);

            if (is.undefined(targetBudget)) {
                res.status(404).end();
                break;
            }

            res.status(200).json(targetBudget);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
