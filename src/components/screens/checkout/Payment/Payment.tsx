import { type CheckoutValues } from '@/types/checkout.interface'
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import {
  type FieldErrors,
  type UseFormRegister,
  type UseFormSetValue,
  type UseFormWatch
} from 'react-hook-form'

interface Props {
  register: UseFormRegister<CheckoutValues>
  watch: UseFormWatch<CheckoutValues>
  errors: FieldErrors<CheckoutValues>
  setValue: UseFormSetValue<CheckoutValues>
}

const Payment = ({ register, errors, setValue, watch }: Props) => {
  const cardNumberWatch = watch('cardNumber')

  function getCardType() {
    if (/^4/.test(cardNumberWatch)) {
      return (
        <Image width={60} height={50} src='/icons/visa.svg' alt='Visa card' />
      )
    } else if (/^5[1-5]/.test(cardNumberWatch)) {
      return (
        <Image
          width={50}
          height={50}
          src='/icons/mastercard.svg'
          alt='Mastercard card'
        />
      )
    }
    return (
      <Image
        width={50}
        height={30}
        src='/icons/credit-card.svg'
        alt='Credit card card'
      />
    )
  }

  return (
    <Box className='checkout__box'>
      <HStack justifyContent='space-between' mb={5}>
        <Text fontSize='lg' fontWeight='semibold'>
          Credit card
        </Text>
        <HStack w='50px' h='50px' objectFit='contain' align='center'>
          {getCardType()}
        </HStack>
      </HStack>
      <Flex gap={3} direction='column'>
        <FormControl isInvalid={!!errors.cardHolder}>
          <FormLabel>Card holder</FormLabel>
          <Input
            focusBorderColor='green'
            {...register('cardHolder')}
            placeholder='Card holder'
          />
          <FormErrorMessage>
            {errors.cardHolder && errors.cardHolder.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.cardNumber}>
          <FormLabel>Card number</FormLabel>
          <Input
            focusBorderColor='green'
            {...register('cardNumber', {
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target
                const formattedValue = value
                  .replace(/(\d{4})(?=\d)/g, '$1 ')
                  .slice(0, 19)

                setValue('cardNumber', formattedValue)
              }
            })}
            placeholder='Card number'
          />
          <FormErrorMessage>
            {errors.cardNumber && errors.cardNumber.message}
          </FormErrorMessage>
        </FormControl>
        <HStack gap={3}>
          <FormControl isInvalid={!!errors.month}>
            <FormLabel>Month</FormLabel>
            <Input
              type='number'
              focusBorderColor='green'
              {...register('month', {
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = event.target

                  setValue('month', value.slice(0, 2))
                }
              })}
              placeholder='Month'
            />
            <FormErrorMessage>
              {errors.month && errors.month.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.year}>
            <FormLabel>Year</FormLabel>
            <Input
              type='number'
              focusBorderColor='green'
              {...register('year', {
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = event.target

                  setValue('year', value.slice(0, 4))
                }
              })}
              placeholder='Year'
            />
            <FormErrorMessage>
              {errors.year && errors.year.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.cvc}>
            <FormLabel>CVC</FormLabel>
            <Input
              type='number'
              focusBorderColor='green'
              {...register('cvc', {
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = event.target

                  setValue('cvc', value.slice(0, 4))
                }
              })}
              placeholder='CVC'
            />
            <FormErrorMessage>
              {errors.cvc && errors.cvc.message}
            </FormErrorMessage>
          </FormControl>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Payment
