/* eslint-disable @typescript-eslint/no-misused-promises */
import { useOrders } from '@/hooks/useOrders'
import { useCartStore } from '@/stores/cartStore'
import { type CheckoutValues } from '@/types/checkout.interface'
import Button from '@/ui/Button/Button'
import { delivery } from '@/utils/constants'
import { generateOrderId } from '@/utils/generateOrderId'
import { Flex, useToast } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import AdditionalInformations from './AdditionalInformations/AdditionalInformations'
import BillingInfo from './BillingInfo/BillingInfo'
import BillingMethod from './BillingMethod/BillingMethod'
import styles from './Checkout.module.scss'
import Confirmation from './Confirmation/Confirmation'
import OrderSummary from './OrderSummary/OrderSummary'
import Payment from './Payment/Payment'
import SectionWithTitle from './SectionWithTitle'
import { schema } from './schemaYup'

const Checkout = () => {
  const { data: session } = useSession()
  const toast = useToast()

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset
  } = useForm<CheckoutValues>({
    mode: 'onChange',
    defaultValues: {
      firstName: session?.user.name as string,
      email: session?.user.email as string,
      cardHolder: session?.user.name as string,
      billing: 'novaposhta'
    },
    resolver: yupResolver(schema)
  })

  const { cart, total, clearCart } = useCartStore((state) => state)

  const billingWatch = watch('billing')

  const { handleCreateOrder } = useOrders()

  const onSubmit = handleSubmit(async (data: CheckoutValues): Promise<void> => {
    console.log(data)

    if (session?.user) {
      await handleCreateOrder({
        userId: session.user.id,
        data: new Date(),
        order_number: generateOrderId(),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        products: cart.map((item) => ({
          productId: item.product.id,
          name: item.product.name,
          image: item.product.image[0],
          price: item.product.price,
          count: item.count,
          total: item.count * item.product.price
        })),
        total: total,
        address: `${data.country}, ${data.city}, ${data.address}, ${data.zipCode}`,
        delivery: data.billing,
        delivery_count:
          billingWatch === 'novaposhta'
            ? delivery.novaposhta
            : billingWatch === 'ukrposhta'
            ? delivery.ukrposhta
            : 0
      })
    }
    toast({
      title: 'Order successfully created',
      status: 'success',
      duration: 2500,
      isClosable: true,
      position: 'top'
    })
    reset()
    clearCart()
  })

  return (
    <Flex className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <SectionWithTitle
          title='Billing info'
          subTitle='Please enter your billing info'
          step={1}>
          <BillingInfo register={register} errors={errors} />
        </SectionWithTitle>
        <SectionWithTitle
          title='Billing method'
          subTitle='Please enter your billing method'
          step={2}>
          <BillingMethod control={control} />
        </SectionWithTitle>
        <SectionWithTitle
          title='Payment'
          subTitle='Please fill in your payment details'
          step={3}>
          <Payment
            register={register}
            errors={errors}
            setValue={setValue}
            watch={watch}
          />
        </SectionWithTitle>
        <SectionWithTitle
          title="Additional information's"
          subTitle='Need something else? We will make it for you!'
          step={4}>
          <AdditionalInformations register={register} />
        </SectionWithTitle>
        <SectionWithTitle
          title='Confirmation'
          subTitle='We are getting to the end. Just few clicks and your order si ready!'
          step={5}>
          <Confirmation register={register} errors={errors} />
        </SectionWithTitle>
        <Button type='submit'>Complete order</Button>
      </form>
      <OrderSummary billingWatch={billingWatch} />
    </Flex>
  )
}

export default Checkout
