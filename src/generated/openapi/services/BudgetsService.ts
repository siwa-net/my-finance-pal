/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Budget } from '../models/Budget';
import type { BudgetId } from '../models/BudgetId';
import type { BudgetSummary } from '../models/BudgetSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { NewBudget } from "../models/NewBudget";

export class BudgetsService {

    /**
     * Create a new budget
     * @param requestBody
     * @returns Budget Budget created
     * @throws ApiError
     */
    public static createBudget(
        requestBody: NewBudget,
    ): CancelablePromise<Budget> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/budgets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid budget`,
            },
        });
    }

    /**
     * Get all budgets
     * @returns Budget OK
     * @throws ApiError
     */
    public static getBudgets(): CancelablePromise<Array<Budget>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/budgets',
        });
    }

    /**
     * Get a budget summary including all expenses for a given ID
     * @param budgetId The UUID of the budget
     * @returns BudgetSummary OK
     * @throws ApiError
     */
    public static getBudgetSummary(
        budgetId: BudgetId,
    ): CancelablePromise<BudgetSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/budgets/{budgetId}/summary',
            path: {
                'budgetId': budgetId,
            },
            errors: {
                404: `Budget not found`,
            },
        });
    }

    /**
     * Delete a budget including all expenses
     * @param budgetId The UUID of the budget
     * @returns void
     * @throws ApiError
     */
    public static deleteBudget(
        budgetId: BudgetId,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/budgets/{budgetId}',
            path: {
                'budgetId': budgetId,
            },
            errors: {
                404: `Budget not found`,
            },
        });
    }
}
