import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';

import { BudgetsService } from '../generated/openapi';
import { BudgetSummaryModel, mapToBudgetSummaryModel } from '../models/budget-summary';

const getQueryKey = (id: string) => ['/budgets', `/${id}`, '/summary'];

export const useInvalidateQuery = (id: string) => {
    const queryClient = useQueryClient();

    return () => queryClient.invalidateQueries(getQueryKey(id));
};
export const useBudgetSummaryQuery = (id: string): UseQueryResult<BudgetSummaryModel | null> =>
    useQuery({
        queryKey: getQueryKey(id),
        queryFn: () => BudgetsService.getBudgetSummary(id),
        keepPreviousData: true,
        select: mapToBudgetSummaryModel,
    });
