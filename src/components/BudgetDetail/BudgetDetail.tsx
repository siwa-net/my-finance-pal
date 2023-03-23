import is from '@sindresorhus/is';
import { FunctionComponent } from 'react';

import styles from './BudgetDetail.module.scss';
import { useBudgetSummaryQuery } from '../../hooks/useBudgetSummaryQuery';
import { Card } from '../_design/Card/Card';

type BudgetDetailProps = {
    id: string;
};

export const BudgetDetail: FunctionComponent<BudgetDetailProps> = ({ id }) => {
    const budgetQuery = useBudgetSummaryQuery(id);
    const budget = budgetQuery.data;

    if (is.undefined(budget) || budgetQuery.isFetching) {
        return null;
    }

    return (
        <Card>
            <h1>{budget.name} </h1>
            <div className={styles.ProgressBar}>
                <div className={styles.ProgressPercentage}></div>
            </div>
            <span>Amount</span>
            <span>Date- start -end</span>
            <button onClick={() => null}>View transactions</button>
        </Card>
    );
};
