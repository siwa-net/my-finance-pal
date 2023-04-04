import { z } from 'zod';

import { optionalDateSchema } from './_generic-schemas';
import { expenseSchema } from './expense';

export const budgetSummaryModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    limit: z.number().positive(),
    expenses: z.array(expenseSchema),
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
