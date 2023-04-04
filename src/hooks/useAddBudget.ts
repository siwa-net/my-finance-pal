import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { useInvalidateQuery } from './useBudgets';
import { Budget, BudgetsService } from '../generated/openapi';
import { NewBudgetModel } from '../models/budget';

export const useAddBudget = (): UseMutationResult<Budget, unknown, NewBudgetModel> => {
    const invalidateBudgetQuery = useInvalidateQuery();

    return useMutation(
        (budget: NewBudgetModel) => {
            console.log('budget: ', budget);
            return BudgetsService.createBudget(budget);
        },
        {
            onSuccess: () => invalidateBudgetQuery(),
        },
    );
};
