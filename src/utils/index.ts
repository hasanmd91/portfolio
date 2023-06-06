type CalculateYearsOfExperience = (
  startDate: string,
  endDate: string,
  isPresent?: boolean
) => { years: string; months: string };

export const calculateYearsOfExperience: CalculateYearsOfExperience = (
  startDate,
  endDate,
  isPresent
) => {
  const start = new Date(startDate);
  const end = isPresent ? new Date() : new Date(endDate);

  const differenceMs = end.getTime() - start.getTime();

  const years = differenceMs / (1000 * 60 * 60 * 24 * 365.25);
  const months = years * 12;

  const roundedYears = Math.floor(years);
  const roundedMonths = Math.floor(months % 12);

  return {
    years: roundedYears.toString(),
    months: roundedMonths.toString(),
  };
};
