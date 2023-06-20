import Loader from '@/ui/Loaders/Loader/Loader'
import PageTitle from '@/ui/PageTitle/PageTitle'
import { api } from '@/utils/api'
import { VStack } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import OrderItem from './OrderItem/OrderItem'

const Orders = () => {
  const { data: session } = useSession()

  const { data, isLoading, isError } = api.orders.getOrders.useQuery(
    {
      userId: session?.user.id as string
    },
    { enabled: !!session?.user.id }
  )

  if (!session?.user) {
    return <PageTitle>Sign in to see your orders</PageTitle>
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <PageTitle>Error fetch products</PageTitle>
  }

  if (!data.length || !data.length) {
    return <PageTitle>No orders</PageTitle>
  }

  return (
    <>
      <PageTitle>Orders</PageTitle>
      <VStack spacing={4} align='stretch'>
        {data?.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </VStack>
    </>
  )
}

export default Orders
