import { faSackDollar } from '@fortawesome/free-solid-svg-icons/faSackDollar';
import { faUserGear } from '@fortawesome/free-solid-svg-icons/faUserGear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

import styles from './Navigation.module.scss';

export const Navigation: FunctionComponent = () => (
    <nav className={styles.Container}>
        <FontAwesomeIcon icon={faSackDollar} size={'2x'} />
        <big>My Finance Pal</big>
        <FontAwesomeIcon icon={faUserGear} size={'2x'} />
    </nav>
);
