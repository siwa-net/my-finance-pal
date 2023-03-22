/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A new transaction to be created
 */
export type NewTransaction = {
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

