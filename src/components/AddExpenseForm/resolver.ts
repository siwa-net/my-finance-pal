import { Resolver } from 'react-hook-form';
import { z } from 'zod';

import { NewExpenseModel } from '../../models/expense';

const expenseFormSchema = z.object({
    description: z.string(),
    amount: z.number(),
    date: z.date(),
});

export const resolver: Resolver<NewExpenseModel> = async (values: unknown) => {
    const parseResult = expenseFormSchema.safeParse(values);
    if (!parseResult.success) {
        return {
            values: parseResult.error,
            errors: { root: { message: parseResult.error.message } },
        };
    } else {
        return {
            values: parseResult.data,
            errors: {},
        };
    }
};
