// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Budget } from '../../../generated/openapi';
import { budgetFactory } from '../factories/budget.factories';

import type { NextApiRequest, NextApiResponse } from 'next';

// TODO fix this setup as on HMR this is created as well again which results in invalid data on detail pages (404)
export const budgetList = budgetFactory.buildList(2);
budgetFactory.rewindSequence();

export default function handler(_req: NextApiRequest, res: NextApiResponse<Budget[]>) {
    res.status(200).json(budgetList);
}
