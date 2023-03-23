import is from '@sindresorhus/is';

import { Budget } from '../../../../generated/openapi';
import { budgetList } from '../index';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<Budget>) {
    const { query, method } = req;
    const id = query.id as string;

    switch (method) {
        case 'GET':
            const targetBudget = budgetList.find(({ id: budgetId }) => budgetId === id);

            console.log(budgetList.map(({ id }) => id));

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
