import { z } from 'zod';

export const transactionSchema = z.object({
    id: z.string(),
    description: z.string(),
    amount: z.number().positive(),
    date: z
        .string()
        .datetime()
        .transform((dateTime) => new Date(dateTime)),
});

export type TransactionModel = z.infer<typeof transactionSchema>;
