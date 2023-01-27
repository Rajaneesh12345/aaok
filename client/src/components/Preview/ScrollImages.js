export const nextImageIndex = (length, currentIndex) => {
  if (currentIndex + 1 >= length) {
    return 0;
  }
  return (currentIndex + 1);
}
export const previousImageIndex = (length, currentIndex) => {
  if (currentIndex === 0) {
    return (length - 1);
  }
  return (currentIndex - 1);
}
