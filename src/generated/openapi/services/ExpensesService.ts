/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetId } from '../models/BudgetId';
import type { NewExpense } from '../models/NewExpense';
import type { Expense } from '../models/Expense';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExpensesService {

    /**
     * Register a new expense for a budget
     * @param budgetId The UUID of the budget
     * @param requestBody
     * @returns Expense Expense created
     * @throws ApiError
     */
    public static createExpense(
        budgetId: BudgetId,
        requestBody: NewExpense,
    ): CancelablePromise<Expense> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/budgets/{budgetId}/expenses',
            path: {
                'budgetId': budgetId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
