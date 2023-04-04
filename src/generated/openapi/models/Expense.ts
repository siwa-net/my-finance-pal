/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExpenseId } from './ExpenseId';

/**
 * An expense or income related to a single budget
 */
export type Expense = {
    id: ExpenseId;
    /**
     * Description of the expense
     */
    description: string;
    /**
     * Amount of money contained in the expense
     */
    amount: number;
    date: string;
};

