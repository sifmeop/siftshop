import { CheckoutValues } from '@/types/checkout.interface'
import { delivery } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import {
  Flex,
  FormControl,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  TextProps
} from '@chakra-ui/react'
import Image from 'next/image'
import { Control, Controller } from 'react-hook-form'

interface Props {
  control: Control<CheckoutValues, any>
}

const styles: TextProps = {
  color: '#6A983C',
  fontWeight: 'semibold',
  marginRight: 'auto'
}

const BillingMethod = ({ control }: Props) => {
  return (
    <FormControl>
      <Controller
        name='billing'
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value}>
            <Stack className='checkout__box' gap={3}>
              <HStack>
                <Radio value='novaposhta' colorScheme='green'>
                  <Text mr={5}>Nova poshta</Text>
                </Radio>
                <Text {...styles}>+{currencyFormat(delivery.novaposhta)}</Text>
                <Image
                  width={100}
                  height={50}
                  src='/brand/novaposhta.png'
                  alt='Nova poshta'
                />
              </HStack>
              <Flex>
                <Radio value='ukrposhta' colorScheme='green'>
                  <Text mr={5}>Urkposhta</Text>
                </Radio>
                <Text {...styles}>+{currencyFormat(delivery.ukrposhta)}</Text>
                <Image
                  width={100}
                  height={50}
                  src='/brand/ukrposhta.png'
                  alt='Urkposhta'
                />
              </Flex>
              <Flex>
                <Radio value='pickup' colorScheme='green'>
                  <Text mr={5}>Pickup</Text>
                </Radio>
                <Text {...styles}>+{currencyFormat(delivery.pickup)}</Text>
                <Image width={100} height={50} src='logo.svg' alt='Pickup' />
              </Flex>
            </Stack>
          </RadioGroup>
        )}
      />
    </FormControl>
  )
}

export default BillingMethod
