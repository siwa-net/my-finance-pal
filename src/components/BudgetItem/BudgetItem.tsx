import Link from 'next/link';
import { FC } from 'react';

import styles from './BudgetItem.module.scss';
import { Budget } from '../../generated/openapi';

type BudgetItemProps = { budget: Budget };

export const BudgetItem: FC<BudgetItemProps> = ({ budget: { id, spent, name, limit, startDate, endDate } }) => {
    return (
        <div className={styles.Container}>
            <span> {name}</span>
            <span>
                {spent} / {limit}
            </span>
            <span>
                {startDate} - {endDate}
            </span>

            <Link href={`/budgets/${id}`}>More info </Link>
        </div>
    );
};
