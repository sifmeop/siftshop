import { type CheckoutValues } from '@/types/checkout.interface'
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'
import { fields } from './fields'

const styles = {
  fontSize: 'xs',
  fontWeight: 'semibold'
}

interface Props {
  register: UseFormRegister<CheckoutValues>
  errors: FieldErrors<CheckoutValues>
}

const firstColumn = fields.slice(0, 4)
const secondColumn = fields.slice(4)

const BillingInfo = ({ register, errors }: Props) => {
  return (
    <Flex gap='2rem'>
      <Flex direction='column' gap='2rem' flex={1}>
        {firstColumn.map((field) => (
          <FormControl
            key={field.name}
            isInvalid={
              !!errors[field.name as keyof FieldErrors<CheckoutValues>]
            }>
            <FormLabel {...styles}>{field.label}</FormLabel>
            <Input
              focusBorderColor='green'
              {...register(field.name as keyof CheckoutValues)}
              placeholder={field.placeholder}
            />
            <FormErrorMessage>
              {errors[field.name as keyof FieldErrors<CheckoutValues>] &&
                errors[field.name as keyof FieldErrors<CheckoutValues>]
                  ?.message}
            </FormErrorMessage>
          </FormControl>
        ))}
      </Flex>
      <Flex direction='column' gap='2rem' flex={1}>
        {secondColumn.map((field) => (
          <FormControl
            key={field.name}
            isInvalid={
              !!errors[field.name as keyof FieldErrors<CheckoutValues>]
            }>
            <FormLabel {...styles}>{field.label}</FormLabel>
            <Input
              focusBorderColor='green'
              {...register(field.name as keyof CheckoutValues)}
              placeholder={field.placeholder}
            />
            <FormErrorMessage>
              {errors[field.name as keyof FieldErrors<CheckoutValues>] &&
                errors[field.name as keyof FieldErrors<CheckoutValues>]
                  ?.message}
            </FormErrorMessage>
          </FormControl>
        ))}
      </Flex>
    </Flex>
  )
}

export default BillingInfo
