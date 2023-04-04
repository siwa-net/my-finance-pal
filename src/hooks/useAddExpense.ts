import { useMutation } from '@tanstack/react-query';
import { formatISO } from 'date-fns';

import { useInvalidateQuery } from './useBudgetSummaryQuery';
import { ExpensesService } from '../generated/openapi';
import { NewExpenseModel } from '../models/expense';

export const useAddExpense = (id: string) => {
    const invalidateBudgetSummaryQuery = useInvalidateQuery(id);
    return useMutation(
        (expense: NewExpenseModel) => {
            return ExpensesService.createExpense(id, {
                amount: expense.amount,
                date: formatISO(expense.date),
                description: expense.description,
            });
        },
        {
            onSuccess: () => invalidateBudgetSummaryQuery(),
        },
    );
};
