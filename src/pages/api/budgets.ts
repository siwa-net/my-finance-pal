// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { budgetFactory } from './factories/buget.factories';
import { Budget } from '../../generated/openapi';

import type { NextApiRequest, NextApiResponse } from 'next';

const budgetList = budgetFactory.buildList(5);

export default function handler(_req: NextApiRequest, res: NextApiResponse<Budget[]>) {
    res.status(200).json(budgetList);
}