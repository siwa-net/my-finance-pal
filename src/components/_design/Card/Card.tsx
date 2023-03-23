import { FunctionComponent, PropsWithChildren } from 'react';

import styles from './Card.module.scss';

export const Card: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <section className={styles.Card}>{children}</section>
);
