/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetId } from '../models/BudgetId';
import type { NewTransaction } from '../models/NewTransaction';
import type { Transaction } from '../models/Transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionsService {

    /**
     * Register a new transaction for a budget
     * @param budgetId The UUID of the budget
     * @param requestBody
     * @returns Transaction Transaction created
     * @throws ApiError
     */
    public static createTransaction(
        budgetId: BudgetId,
        requestBody: NewTransaction,
    ): CancelablePromise<Transaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/budgets/{budgetId}/transactions',
            path: {
                'budgetId': budgetId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
