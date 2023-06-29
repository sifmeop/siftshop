import * as yup from 'yup'

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'First Name can only contain Latin letters.'
    ),
  email: yup
    .string()
    .required('Email address is required')
    .email('Invalid email address'),
  address: yup
    .string()
    .required('Address is required')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Invalid address'),
  country: yup
    .string()
    .required('State / Country is required')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'State / Country can only contain Latin letters.'
    ),
  lastName: yup
    .string()
    .required('Last Name is required')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Last Name can only contain Latin letters.'
    ),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^(\+?38)?\s?(0\d{2}|\(\d{3}\))\s?\d{3}\s?\d{2}\s?\d{2}$/,
      'Invalid phone number'
    ),
  city: yup
    .string()
    .required('Town / City is required')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Town / City can only contain Latin letters.'
    ),
  zipCode: yup
    .string()
    .required('ZIP / Postal code is required')
    .matches(/^\d{5}(?:-\d{4})?$/, 'Invalid ZIP / Postal code'),
  cardHolder: yup
    .string()
    .required('Card holder is required')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Card holder can only contain Latin letters.'
    ),
  cardNumber: yup
    .string()
    .required('Card number is required')
    .matches(/^\d{4}( \d{4}){3}$/, 'Card number must be a 16-digit number'),
  month: yup
    .string()
    .required('Month is required')
    .matches(/^(1[0-2]|[1-9])$/, 'Number must be between 1 and 12'),
  year: yup
    .string()
    .required('Year is required')
    .matches(/^(19|20)\d{2}$/, 'Year must start on 19 or 20'),
  cvc: yup
    .string()
    .required('CVC is required')
    .matches(/^[0-9]{3,4}$/, 'Invalid CVC'),
  billing: yup.string(),
  note: yup.string(),
  newsletter: yup.boolean(),
  agreement: yup
    .boolean()
    .oneOf(
      [true],
      'Please agree to the terms and conditions and privacy policy'
    )
})
