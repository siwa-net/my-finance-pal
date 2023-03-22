import is from '@sindresorhus/is';
import { useRouter } from 'next/router';

import { BudgetDetail } from '../../components/BudgetDetail/BudgetDetail';

export default function BudgetPage() {
    const router = useRouter();

    const { id } = router.query;

    if (is.nonEmptyString(id)) {
        return (
            <>
                <BudgetDetail id={id} />
            </>
        );
    }

    return null;
}
