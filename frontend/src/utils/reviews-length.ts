export const printRewiewsLength = (count: number) => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${count} отзывов`
  }

  if (lastDigit === 1) {
    return `${count} отзыв`
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} отзыва`
  }

  return `${count} отзывов`
}
