import { SubmitHandler, useForm } from 'react-hook-form';

import { useAddBudget } from '../../hooks/useAddBudget';
import { NewBudgetModel } from '../../models/budget';
import { Card } from '../_design/Card/Card';

// TODO check if necessary for type safety
// const resolver: Resolver<NewBudgetModel> = async (values: unknown) => ({
//     values: newBudgetModelSchema.parse(values),
//     errors: {},
// });
export const AddBudgetForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewBudgetModel>();
    const { mutate: addBudget } = useAddBudget();
    const onSubmit: SubmitHandler<NewBudgetModel> = (budgetItem: NewBudgetModel) => {
        console.log(budgetItem);
        addBudget(budgetItem);
    };
    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Budget name" {...register('name', { required: true })} />
                {errors.name && <span>This field is required</span>}
                <input type="number" defaultValue={0} {...register('limit', { min: 0, required: true })} />
                {errors.limit && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </Card>
    );
};
