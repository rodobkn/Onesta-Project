export const getPaginationNumbers = (currentPage: number) => {
  if (currentPage <= 5) {
    return [1, 2, 3, 4, 5];
  } else {
    return [6, 7, 8, 9, 10];
  }
};
