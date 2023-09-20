const curencyFormat = new Intl.NumberFormat('en-us', {
  currency: 'USD',
  style: 'currency',
})

export function formatCurrency(number) {
  return curencyFormat.format(number)
}
