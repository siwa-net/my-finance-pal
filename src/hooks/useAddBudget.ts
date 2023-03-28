import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { Budget, BudgetsService, NewBudget } from '../generated/openapi';
import { NewBudgetModel } from '../models/budget';

export const useAddBudget = (): UseMutationResult<Budget, unknown, NewBudgetModel> =>
    useMutation((budget: NewBudgetModel) => {
        const mappedBudget: NewBudget = {
            ...budget,
            startDate: budget.startDate?.toISOString(),
            endDate: budget.endDate?.toISOString(),
        };
        return BudgetsService.createBudget(mappedBudget);
    });
