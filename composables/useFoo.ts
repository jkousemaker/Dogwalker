export const useFoo = (date: Date): boolean => {
  const currentDate = new Date();
  if (currentDate >= date) {
    return true;
  }
  return false;
};
