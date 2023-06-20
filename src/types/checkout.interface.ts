export interface CheckoutValues {
  firstName: string
  email: string
  address: string
  country: string
  lastName: string
  phone: string
  city: string
  zipCode: string
  cardHolder: string
  cardNumber: string
  month: string
  year: string
  cvc: string
  billing: 'novaposhta' | 'ukrposhta' | 'pickup'
  note: string
  newsletter: boolean
  agreement: boolean
}
