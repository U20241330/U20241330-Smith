const date1 = new Date("2020-01-01")
const date2 = new Date("2022-06-15")

const differenceInMilliseconds = Math.abs(date2 - date1)

const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24)

console.log(`La diferencia entre ${date1} y ${date2} es ${Math.floor(differenceInDays)} dias`)