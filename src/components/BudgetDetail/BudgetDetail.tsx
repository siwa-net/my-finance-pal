import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import is from '@sindresorhus/is';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import styles from './BudgetDetail.module.scss';
import { datesToDayRange, dateToFormattedDay } from '../../helpers/date';
import { useBudgetSummaryQuery } from '../../hooks/useBudgetSummaryQuery';
import { Button } from '../_design/Button/Button';
import { Card } from '../_design/Card/Card';
import { DetailWithTitle } from '../_design/DetailWithTitle/DetailWithTitle';

type BudgetDetailProps = {
    id: string;
};

export const BudgetDetail: FunctionComponent<BudgetDetailProps> = ({ id }) => {
    const budgetQuery = useBudgetSummaryQuery(id);
    const budget = budgetQuery.data;

    if (is.nullOrUndefined(budget) || budgetQuery.isFetching) {
        return null;
    }

    const { startDate, endDate, name, limit, transactions } = budget;

    const isValidDateRange = is.date(startDate) && is.date(endDate) && startDate < endDate;

    return (
        <section className={styles.DetailsContainer}>
            <div className={styles.DetailsContainerLeft}>
                <Card>
                    <h1 className={styles.Headline1}>
                        <Link href={'/'}>
                            <FontAwesomeIcon icon={faArrowLeft} className={styles.ArrowBack} />
                        </Link>
                        {name}
                    </h1>
                    <div className={styles.Details}>
                        <DetailWithTitle title={'Limit'}>{limit}</DetailWithTitle>
                        {isValidDateRange && (
                            <DetailWithTitle title={'Period'}>{datesToDayRange(startDate, endDate)}</DetailWithTitle>
                        )}
                    </div>
                </Card>
                <Card>
                    <h3>Transactions</h3>
                    <ul>
                        {transactions.map((transaction) => (
                            <li key={transaction.id}>
                                {dateToFormattedDay(transaction.date)} - {transaction.description}
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
            <div className={styles.DetailsContainerRight}>
                <Card>
                    <h3>New Transaction</h3>
                    <Button onClick={() => {}}>Add Transaction</Button>
                </Card>
            </div>
        </section>
    );
};
