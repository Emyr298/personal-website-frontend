export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
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
}