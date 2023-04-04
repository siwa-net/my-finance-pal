import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngry } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import styles from './BudgetList.module.scss';
import { useBudgets } from '../../hooks/useBudgets';
import { useToggle } from '../../hooks/useToggle';
import { Button } from '../_design/Button/Button';
import { Card } from '../_design/Card/Card';
import { AddBudgetForm } from '../AddBudgetForm/AddBudgetForm';
import { BudgetItem } from '../BudgetItem/BudgetItem';

library.add(faAngry);

export const BudgetList: FC = () => {
    const { data: budgets = [] } = useBudgets();
    const [showAddBudget, toggleShowAddBudget] = useToggle(false);

    return (
        <section className={styles.Container}>
            <Button onClick={toggleShowAddBudget}>
                Add a budget <FontAwesomeIcon icon={showAddBudget ? faMinus : faPlus} />
            </Button>
            {showAddBudget && (
                <Card>
                    <AddBudgetForm />
                </Card>
            )}
            <div className={styles.ListItems}>
                {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                ))}
            </div>
        </section>
    );
};
