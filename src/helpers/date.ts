import format from 'date-fns/format';

const DAY_FORMAT = 'dd.MM.yy';

export const dateToFormattedDay = (date: Date): string => format(date, DAY_FORMAT);

export const datesToDayRange = (start: Date, end: Date) => dateToFormattedDay(start) + ' – ' + dateToFormattedDay(end);
