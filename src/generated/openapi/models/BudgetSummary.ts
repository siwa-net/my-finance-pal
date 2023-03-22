/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BudgetId } from './BudgetId';
import type { Transaction } from './Transaction';

/**
 * Summary of the whole budget including all transactions
 */
export type BudgetSummary = {
    id: BudgetId;
    /**
     * The name of the budget
     */
    name: string;
    /**
     * The total amount available for the budget
     */
    limit: number;
    /**
     * Date marking the start of the budget period
     */
    startDate?: string;
    /**
     * Date marking the end of the budget period
     */
    endDate?: string;
    /**
     * All transactions of the budget
     */
    transactions: Array<Transaction>;
};

