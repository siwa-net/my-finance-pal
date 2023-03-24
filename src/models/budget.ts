import { z } from 'zod';

import { optionalDateSchema } from './_generic-schemas';

export const budgetModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    limit: z.number().positive(),
    spent: z.number().positive(),
    startDate: optionalDateSchema,
    endDate: optionalDateSchema,
});

export type BudgetModel = z.infer<typeof budgetModelSchema>;

export const mapToBudgetModel = (data: unknown): BudgetModel | null => {
    try {
        return budgetModelSchema.parse(data);
    } catch (e) {
        console.error(e);
        return null;
    }
};
