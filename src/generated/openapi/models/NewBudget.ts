/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Budget to be created
 */
export type NewBudget = {
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
};

