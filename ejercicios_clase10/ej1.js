const date = new Date(2012, 1, 20, 3, 12, 0)

const formattedDate = date.toLocaleString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
})

console.log(formattedDate)