import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import styles from './DatePicker.module.scss';

const DATE_FORMAT = 'dd.MM.yyyy';
export const DatePicker = <ControlType extends FieldValues>({
    control,
    name,
    label,
}: {
    control: Control<ControlType>;
    name: Path<ControlType>;
    label?: string;
}) => {
    return (
        <Controller
            control={control}
            render={({ field: { value, ...rest }, fieldState: { error } }) => (
                <div className={styles.Wrapper}>
                    <MUIDatePicker
                        className={styles.DatePicker}
                        label={label && <span>{label}</span>}
                        format={DATE_FORMAT}
                        {...rest}
                        value={value ? new Date(value) : null}
                    />
                    {error && <span className={styles.Error}>{error.message}</span>}
                </div>
            )}
            name={name}
        />
    );
};
