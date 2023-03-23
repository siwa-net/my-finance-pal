import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { BudgetsService, BudgetSummary } from '../generated/openapi';

const queryKey = Symbol('getBudgetSummary');

export const useBudgetSummaryQuery = (id: string): UseQueryResult<BudgetSummary> => {
    return useQuery({
        queryKey: [queryKey, id],
        queryFn: () => BudgetsService.getBudgetSummary(id),
        keepPreviousData: true,
    });
};
