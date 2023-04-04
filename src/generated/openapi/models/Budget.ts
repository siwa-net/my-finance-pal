/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BudgetId } from './BudgetId';

/**
 * Planned money to be available for tracking expenses related to a certain purpose over a period of time
 */
export type Budget = {
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
     * The summed up spent amount of all expenses of that budget
     */
    spent: number;
    /**
     * Date marking the start of the budget period
     */
    startDate?: string;
    /**
     * Date marking the end of the budget period
     */
    endDate?: string;
};

