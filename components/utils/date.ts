export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getTime = (startDate: Date, endDate: Date | null) => {
  const startMonth = MONTHS[startDate.getMonth()];
  const startYear = startDate.getFullYear();

  if (!endDate) {
    return `${startMonth} ${startYear} - Present`;
  }

  const endMonth = MONTHS[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};

export function getReadableDate(dateInput: Date | string) {
  const date = new Date(dateInput);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const customFormat = `${year}-${month}-${day} ${hours}:${minutes}`;

  return customFormat;
}
