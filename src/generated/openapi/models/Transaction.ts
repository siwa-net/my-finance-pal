/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionId } from './TransactionId';

/**
 * An expense or income related to a single budget
 */
export type Transaction = {
    id: TransactionId;
    /**
     * Description of the transaction
     */
    description: string;
    /**
     * Amount of money contained in the transaction
     */
    amount: number;
    date: string;
};

