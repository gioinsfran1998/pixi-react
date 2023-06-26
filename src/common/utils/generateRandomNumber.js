export const generateRandomNumber = (start, end) => {
  const randomNumber = Math.random() * (end - start) + start
  const roundedNumber = Math.round(randomNumber * 10) / 10
  return roundedNumber
}
