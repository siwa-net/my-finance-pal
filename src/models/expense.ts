import { z } from 'zod';

export const newExpenseSchema = z.object({
    description: z.string(),
    amount: z.number().positive(),
    date: z
        .string()
        .datetime({ offset: true })
        .transform((dateTime) => new Date(dateTime)),
});

export const expenseSchema = newExpenseSchema.extend({
    id: z.string(),
});

export type ExpenseModel = z.infer<typeof expenseSchema>;
export type NewExpenseModel = z.infer<typeof newExpenseSchema>;
