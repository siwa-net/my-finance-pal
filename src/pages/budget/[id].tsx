import is from '@sindresorhus/is';
import { useRouter } from 'next/router';

import { BudgetDetail } from '../../components/BudgetDetail/BudgetDetail';

export default function BudgetPage() {
    const router = useRouter();
    const { id } = router.query;

    return !is.string(id) ? null : <BudgetDetail id={id} />;
}
