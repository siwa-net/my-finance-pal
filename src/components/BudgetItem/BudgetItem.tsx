import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import is from '@sindresorhus/is';
import Link from 'next/link';
import { FC } from 'react';
import 'react-sweet-progress/lib/style.css';

import styles from './BudgetItem.module.scss';
import { datesToDayRange } from '../../helpers/date';
import { BudgetModel } from '../../models/budget';
import { Card } from '../_design/Card/Card';
import { DetailWithTitle } from '../_design/DetailWithTitle/DetailWithTitle';
import { ProgressBar } from '../_design/ProgressBar/ProgressBar';

type BudgetItemProps = { budget: BudgetModel };

export const BudgetItem: FC<BudgetItemProps> = ({ budget }) => {
    const { id, spent, name, limit, startDate, endDate } = budget;

    const spentPercentage = Math.trunc((100 * spent) / limit);

    const isValidDateRange = is.date(startDate) && is.date(endDate) && endDate > startDate;

    return (
        <Card>
            <div className={styles.Container}>
                <h3 className={styles.Title}>
                    {name} <FontAwesomeIcon icon={faCoins} />
                </h3>

                <DetailWithTitle title={'Remaining Budget'}>
                    <ProgressBar percentage={spentPercentage} />
                </DetailWithTitle>

                {isValidDateRange && (
                    <DetailWithTitle title={'Period'}>
                        <p>{datesToDayRange(startDate, endDate)}</p>
                    </DetailWithTitle>
                )}

                <Link className={styles.Details} href={`/budget/${id}`}>
                    Show Details
                </Link>
            </div>
        </Card>
    );
};
