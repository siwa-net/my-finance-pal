import { Button, Grid, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { resolver } from './resolver';
import { useAddBudget } from '../../hooks/useAddBudget';
import { NewBudgetModel } from '../../models/budget';
import { DatePicker } from '../DatePicker/DatePicker';

export const AddBudgetForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<NewBudgetModel>({ resolver });
    const { mutate: addBudget, isLoading } = useAddBudget();
    const onSubmit: SubmitHandler<NewBudgetModel> = async (budgetItem) => {
        await addBudget(budgetItem);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container alignItems="flex-end" rowGap={4} columnGap={2}>
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="Budget name"
                        required
                        {...register('name', { required: true })}
                        error={!!errors.name}
                    />
                    {errors.name && <>ERROR!</>}
                </Grid>
                <Grid item lg={4} xs={12} sm={5.5}>
                    <TextField
                        fullWidth
                        variant="standard"
                        type="number"
                        label="Limit"
                        required
                        {...register('limit', { min: 0, required: true, valueAsNumber: true })}
                        error={!!errors.limit}
                    />
                </Grid>
                <Grid item lg={4} sm={5} md={4} xs={12}>
                    <DatePicker control={control} name="startDate" label="Start" />
                </Grid>
                <Grid item lg={4} sm={5} md={4} xs={12}>
                    <DatePicker control={control} name="endDate" label="End" />
                </Grid>
                <Grid item lg sm md justifyContent={'center'}>
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        disabled={isLoading || Object.keys(errors).length > 0}
                    >
                        Create
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
