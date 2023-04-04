// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Budget } from '../../../generated/openapi';
import { budgetFactory } from '../factories/budget.factories';

import type { NextApiRequest, NextApiResponse } from 'next';

export const budgetList = budgetFactory.buildList(8);
budgetFactory.rewindSequence();

export default function handler(_req: NextApiRequest, res: NextApiResponse<Budget[]>) {
    const { method, body } = _req;
    switch (method) {
        case 'POST':
            const newBudget: Budget = { ...body, id: body.name, spent: 0 };
            budgetList.push(newBudget);
            return res.status(200).json(budgetList);
        case 'GET':
            return res.status(200).json(budgetList);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
