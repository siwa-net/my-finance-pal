import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Budget, BudgetsService } from '../generated/openapi';
import { BudgetModel, mapToBudgetModel } from '../models/budget';

const budgetSymbol = Symbol('getBudgets');

const selectValidBudgetModelsFromBudgetDtos = (budgetDtos: Budget[]) =>
    budgetDtos.reduce<BudgetModel[]>((budgetModels, budgetDto) => {
        const mappedBudget = mapToBudgetModel(budgetDto);

        return mappedBudget ? [...budgetModels, mappedBudget] : budgetModels;
    }, []);

export const useBudgets = (): UseQueryResult<BudgetModel[]> =>
    useQuery({
        queryKey: [budgetSymbol],
        queryFn: () => BudgetsService.getBudgets(),
        select: selectValidBudgetModelsFromBudgetDtos,
    });
