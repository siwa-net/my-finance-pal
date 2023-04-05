import { isBefore } from 'date-fns';
import { Resolver } from 'react-hook-form';
import { z } from 'zod';

import { NewBudgetModel } from '../../models/budget';

const budgetFormSchema = z.object({
    name: z.string(),
    limit: z.number(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
});

export const resolver: Resolver<NewBudgetModel> = async (values: unknown) => {
    const parseResult = budgetFormSchema.safeParse(values);
    if (!parseResult.success) {
        return {
            values: parseResult,
            errors: { root: { message: parseResult.error.message } },
        };
    } else {
        // check whether dates are set up correctly
        const { startDate, endDate } = parseResult.data;
        if (startDate && endDate && isBefore(endDate, startDate)) {
            return {
                values: parseResult.data,
                errors: {
                    startDate: { type: 'value', message: 'Start date has to be before end date' },
                },
            };
        }
        return {
            values: parseResult.data,
            errors: {},
        };
    }
};
