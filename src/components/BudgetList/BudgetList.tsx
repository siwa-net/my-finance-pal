import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngry } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import styles from './BudgetList.module.scss';
import { useBudgets } from '../../hooks/useBudgets';
import { Button } from '../_design/Button/Button';
import { AddBudgetForm } from '../AddBudgetForm/AddBudgetForm';
import { BudgetItem } from '../BudgetItem/BudgetItem';

library.add(faAngry);

export const BudgetList: FC = () => {
    const { data: budgets = [] } = useBudgets();
    const [showAddBudget, setShowAddBudget] = useState(false);

    const handleAddBudgetClick = () => {
        // TODO create logic for adding budget
        setShowAddBudget(true);
    };

    return (
        <section className={styles.Container}>
            <Button onClick={handleAddBudgetClick}>
                Add a budget <FontAwesomeIcon icon={faPlus} />
            </Button>
            {showAddBudget && <AddBudgetForm />}
            <div className={styles.ListItems}>
                {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                ))}
            </div>
        </section>
    );
};
