import { FunctionComponent } from 'react';

import styles from './Navigation.module.scss';

export const Navigation: FunctionComponent = () => (
    <nav className={styles.Container}>
        <span>LOGO</span>
        <span>Account</span>
    </nav>
);
