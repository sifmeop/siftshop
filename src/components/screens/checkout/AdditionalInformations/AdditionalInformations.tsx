import { CheckoutValues } from '@/types/checkout.interface'
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<CheckoutValues>
}

const AdditionalInformations = ({ register }: Props) => {
  return (
    <FormControl>
      <FormLabel htmlFor='note'>Order notes</FormLabel>
      <Textarea
        focusBorderColor='green'
        {...register('note')}
        placeholder='Need a specific delivery day? Sending a gift? Let’s say ...'
        resize='none'
      />
    </FormControl>
  )
}

export default AdditionalInformations
