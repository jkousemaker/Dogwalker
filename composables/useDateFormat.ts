export const useDateFormat = (date: Date): string => {
  const formattedDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

  console.log(formattedDate);
  return formattedDate;
};
