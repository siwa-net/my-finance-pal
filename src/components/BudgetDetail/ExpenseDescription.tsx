import styles from './ExpenseDescription.module.scss';

type ExpenseDescriptionProps = { amount: number; description: string };
export const ExpenseDescription = ({ amount, description }: ExpenseDescriptionProps) => {
    return (
        <div className={styles.Wrapper}>
            <div>{description}</div>
            <div>{amount}€</div>
        </div>
    );
};
