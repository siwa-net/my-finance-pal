import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';

import { Budget, BudgetsService } from '../generated/openapi';
import { BudgetModel, mapToBudgetModel } from '../models/budget';

const budgetsQueryKey = ['/budgets'];

const selectValidBudgetModelsFromBudgetDtos = (budgetDtos: Budget[]) =>
    budgetDtos.reduce<BudgetModel[]>((budgetModels, budgetDto) => {
        const mappedBudget = mapToBudgetModel(budgetDto);

        return mappedBudget ? [...budgetModels, mappedBudget] : budgetModels;
    }, []);

export const useInvalidateQuery = () => {
    const queryClient = useQueryClient();
    return () => queryClient.invalidateQueries(budgetsQueryKey);
};

export const useBudgets = (): UseQueryResult<BudgetModel[]> =>
    useQuery({
        queryKey: budgetsQueryKey,
        queryFn: () => BudgetsService.getBudgets(),
        select: selectValidBudgetModelsFromBudgetDtos,
    });
