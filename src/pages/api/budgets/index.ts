// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Budget } from '../../../generated/openapi';
import { budgetFactory } from '../factories/budget.factories';

import type { NextApiRequest, NextApiResponse } from 'next';

export const budgetList = budgetFactory.buildList(8);
budgetFactory.rewindSequence();

export default function handler(_req: NextApiRequest, res: NextApiResponse<Budget[]>) {
    res.status(200).json(budgetList);
}
