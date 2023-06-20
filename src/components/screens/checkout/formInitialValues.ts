import { type CheckoutValues } from '@/types/checkout.interface'

export const formInitialValues: CheckoutValues = {
  firstName: '',
  email: '',
  address: '',
  country: '',
  lastName: '',
  phone: '',
  city: '',
  zipCode: '',
  cardNumber: '',
  cardHolder: '',
  month: '',
  year: '',
  cvc: '',
  billing: 'novaposhta',
  note: '',
  newsletter: false,
  agreement: false
}
