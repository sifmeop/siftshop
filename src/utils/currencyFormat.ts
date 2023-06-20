export const currencyFormat = (price: number) => {
  return new Intl.NumberFormat('ua-UA', {
    style: 'currency',
    currency: 'UAH',
    compactDisplay: 'long',
    currencyDisplay: 'narrowSymbol'
  }).format(price)
}
