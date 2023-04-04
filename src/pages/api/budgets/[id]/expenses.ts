import is from '@sindresorhus/is';
import { NextApiRequest, NextApiResponse } from 'next';

import { budgetSummaryMock } from './summary';
import { BudgetSummary } from '../../../../generated/openapi';

export default function handler(req: NextApiRequest, res: NextApiResponse<BudgetSummary>) {
    const { query, method, body } = req;
    const id = query.id as string;

    switch (method) {
        case 'POST':
            const budgetToUpdate = budgetSummaryMock.find((budget) => budget.id === id);
            if (is.undefined(budgetToUpdate)) {
                res.status(404).end();
                break;
            }

            budgetToUpdate.expenses.push({ ...body, id: `${id}-${body.description}-${body.date}` });
            res.status(200).json(budgetToUpdate);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
