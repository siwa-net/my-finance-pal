import { Button, Grid, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { resolver } from './resolver';
import { useAddExpense } from '../../hooks/useAddExpense';
import { NewExpenseModel } from '../../models/expense';
import { DatePicker } from '../DatePicker/DatePicker';

type AddExpenseFormProps = {
    id: string;
};

export const AddExpenseForm = ({ id }: AddExpenseFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty, isValid },
        control,
    } = useForm<NewExpenseModel>({ resolver, defaultValues: { date: new Date() } });

    const { mutate: addExpense, isLoading } = useAddExpense(id);

    const onSubmit: SubmitHandler<NewExpenseModel> = async (expense) => {
        await addExpense(expense);
        reset();
    };

    return (
        <>
            <h3>New Expense</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid rowGap={2} container>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            variant="standard"
                            type="text"
                            label="Description"
                            {...register('description', { required: true })}
                            error={!!errors.description}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            variant="standard"
                            type="number"
                            label="Amount"
                            {...register('amount', { required: true, min: 0, valueAsNumber: true })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <DatePicker control={control} name="date" label="Date" />
                    </Grid>
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        disabled={isLoading || Object.keys(errors).length > 0 || !isDirty || !isValid}
                    >
                        Add Expense
                    </Button>
                </Grid>
            </form>
        </>
    );
};
