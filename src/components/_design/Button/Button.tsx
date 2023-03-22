import { FunctionComponent, MouseEventHandler, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends PropsWithChildren {
    readonly onClick: VoidFunction;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
    const { onClick, children } = props;

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick();
    };

    return (
        <button className={styles.Button} onClick={handleClick}>
            {children}
        </button>
    );
};
