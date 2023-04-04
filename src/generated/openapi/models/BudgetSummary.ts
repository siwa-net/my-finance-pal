/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BudgetId } from './BudgetId';
import type { Expense } from './Expense';

/**
 * Summary of the whole budget including all expenses
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
     * All expenses of the budget
     */
    expenses: Array<Expense>;
};

