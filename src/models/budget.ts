import { z } from 'zod';

import { optionalDateSchema } from './_generic-schemas';

export const newBudgetModelSchema = z.object({
    name: z.string(),
    limit: z.number().positive(),
    startDate: optionalDateSchema,
    endDate: optionalDateSchema,
});

export const budgetModelSchema = newBudgetModelSchema.extend({
    id: z.string(),
    spent: z.number().nonnegative(),
});

export type BudgetModel = z.infer<typeof budgetModelSchema>;
export type NewBudgetModel = z.infer<typeof newBudgetModelSchema>;

export const mapToBudgetModel = (data: unknown): BudgetModel | null => {
    try {
        return budgetModelSchema.parse(data);
    } catch (e) {
        console.error(e);
        return null;
    }
};
