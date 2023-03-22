import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';
import Link from 'next/link';
import { round } from 'number-precision';
import { FC } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import styles from './BudgetItem.module.scss';
import { Budget } from '../../generated/openapi';

type BudgetItemProps = { budget: Budget };

const DATE_FORMAT = 'dd.MM.yy';

export const BudgetItem: FC<BudgetItemProps> = ({ budget }) => {
    const { id, spent, name, limit, startDate, endDate } = budget;

    const spentPercentage = round((100 * spent) / limit, 0);
    const startDateFormatted = format(new Date(startDate ?? ''), DATE_FORMAT);
    const endDateFormatted = format(new Date(endDate ?? ''), DATE_FORMAT);

    return (
        <div className={styles.Container}>
            <h3 className={styles.Title}>
                {name} <FontAwesomeIcon icon={faCoins} />
            </h3>
            <div>
                <small>Remaining budget</small>
                <Progress percent={spentPercentage} theme={{ active: { color: '#84844c' } }} />
            </div>

            <div>
                <small>Time</small>
                <p>
                    {startDateFormatted} - {endDateFormatted}
                </p>
            </div>

            <Link href={`/budgets/${id}`}>More info </Link>
        </div>
    );
};
