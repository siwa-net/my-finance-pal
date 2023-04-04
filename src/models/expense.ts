import { z } from 'zod';

export const expenseSchema = z.object({
    id: z.string(),
    description: z.string(),
    amount: z.number().positive(),
    date: z
        .string()
        .datetime()
        .transform((dateTime) => new Date(dateTime)),
});

export type ExpenseModel = z.infer<typeof expenseSchema>;
