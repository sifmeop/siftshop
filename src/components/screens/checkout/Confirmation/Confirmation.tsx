import { type CheckoutValues } from '@/types/checkout.interface'
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  VStack
} from '@chakra-ui/react'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<CheckoutValues>
  errors: FieldErrors<CheckoutValues>
}

const Confirmation = ({ register, errors }: Props) => {
  return (
    <VStack align='stretch' gap={3}>
      <FormControl>
        <Checkbox
          colorScheme='green'
          {...register('newsletter')}
          className='checkout__box'>
          I agree with sending an Marketing and newsletter emails. No spam,
          promised!
        </Checkbox>
      </FormControl>
      <FormControl isInvalid={!!errors.agreement}>
        <Checkbox
          colorScheme='green'
          {...register('agreement')}
          className='checkout__box'>
          I agree with our terms and conditions and privacy policy.
        </Checkbox>
        <FormErrorMessage>
          {errors.agreement && errors.agreement.message}
        </FormErrorMessage>
      </FormControl>
    </VStack>
  )
}

export default Confirmation
