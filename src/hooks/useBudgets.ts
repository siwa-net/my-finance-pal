import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Budget, BudgetsService } from '../generated/openapi';

const budgetSymbol = Symbol('getBudgets');
export const useBudgets = (): UseQueryResult<Budget[]> => {
    return useQuery({
        queryKey: [budgetSymbol],
        queryFn: () => BudgetsService.getBudgets(),
    });
};
