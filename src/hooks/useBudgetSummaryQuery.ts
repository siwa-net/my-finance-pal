import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { BudgetsService } from '../generated/openapi';
import { BudgetSummaryModel, mapToBudgetSummaryModel } from '../models/budget-summary';

const queryKey = Symbol('getBudgetSummary');

export const useBudgetSummaryQuery = (id: string): UseQueryResult<BudgetSummaryModel | null> =>
    useQuery({
        queryKey: [queryKey, id],
        queryFn: () => BudgetsService.getBudgetSummary(id),
        keepPreviousData: true,
        select: mapToBudgetSummaryModel,
    });
