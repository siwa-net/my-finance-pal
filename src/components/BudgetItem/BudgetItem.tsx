import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';
import Link from 'next/link';
import { FC } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import styles from './BudgetItem.module.scss';
import { Budget } from '../../generated/openapi';
import { Card } from '../_design/Card/Card';

type BudgetItemProps = { budget: Budget };

const DATE_FORMAT = 'dd.MM.yy';

export const BudgetItem: FC<BudgetItemProps> = ({ budget }) => {
    const { id, spent, name, limit, startDate, endDate } = budget;

    const spentPercentage = Math.trunc((100 * spent) / limit);
    const startDateFormatted = format(new Date(startDate ?? ''), DATE_FORMAT);
    const endDateFormatted = format(new Date(endDate ?? ''), DATE_FORMAT);

    return (
        <Card>
            <div className={styles.Container}>
                <h3 className={styles.Title}>
                    {name} <FontAwesomeIcon icon={faCoins} />
                </h3>
                <div>
                    <small>Remaining Budget</small>
                    <Progress percent={spentPercentage} theme={{ active: { color: '#84844c' } }} />
                </div>

                <div>
                    <small>Period</small>
                    <p>
                        {startDateFormatted} - {endDateFormatted}
                    </p>
                </div>

                <Link className={styles.Details} href={`/budget/${id}`}>
                    Show Details
                </Link>
            </div>
        </Card>
    );
};
