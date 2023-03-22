import styles from './BudgetDetail.module.scss';

type BudgetDetailProps = {
    id: string;
};

export const BudgetDetail: React.FC<BudgetDetailProps> = ({ id }) => {
    return (
        <>
            <h1>{id} </h1>
            <div className={styles.ProgressBar}>
                <div className={styles.ProgressPercentage}></div>
            </div>
            <span>Amount</span>
            <span>Date- start -end</span>
            <button onClick={() => null}>View transactions</button>
        </>
    );
};
