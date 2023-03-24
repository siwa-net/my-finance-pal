import { FunctionComponent, PropsWithChildren } from 'react';

import styles from './DetailWithTitle.module.scss';

export interface DetailWithTitleProps extends PropsWithChildren {
    readonly title: string;
}

export const DetailWithTitle: FunctionComponent<DetailWithTitleProps> = ({ children, title }) => (
    <div className={styles.Detail}>
        <small>{title}</small>
        <div>{children}</div>
    </div>
);
