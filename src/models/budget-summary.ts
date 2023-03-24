import { z } from 'zod';

import { optionalDateSchema } from './_generic-schemas';
import { transactionSchema } from './transaction';

export const budgetSummaryModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    limit: z.number().positive(),
    transactions: z.array(transactionSchema),
    startDate: optionalDateSchema,
    endDate: optionalDateSchema,
});

export type BudgetSummaryModel = z.infer<typeof budgetSummaryModelSchema>;

export const mapToBudgetSummaryModel = (data: unknown): BudgetSummaryModel | null => {
    try {
        return budgetSummaryModelSchema.parse(data);
    } catch (e) {
        console.error(e);
        return null;
    }
};
