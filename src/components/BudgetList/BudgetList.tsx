import { FC } from 'react';

import styles from './BudgetList.module.scss';
import { useBudgets } from '../../hooks/useBudgets';
import { BudgetItem } from '../BudgetItem/BudgetItem';

export const BudgetList: FC = () => {
    const { data: budgets = [] } = useBudgets();
    return (
        <div className={styles.Container}>
            <button onClick={() => null}>Add a budget</button>
            <div className={styles.ListItems}>
                {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                ))}
            </div>
        </div>
    );
};
