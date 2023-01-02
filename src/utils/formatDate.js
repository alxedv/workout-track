export const formatPtbrDate = (date) => new Intl.DateTimeFormat('pt-BR').format(date);

export const createDatePtbr = (date, time) => {
  const empty = '';

  try {
    return formatPtbrDate(new Date(`${date}T${time}:00`));
  } catch (error) {
    return empty;
  }
};
