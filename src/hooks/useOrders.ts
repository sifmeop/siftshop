import { type OrderMutation } from '@/types/order.interface'
import { api } from '@/utils/api'

export const useOrders = () => {
  const mutation = api.orders.createOrder.useMutation<OrderMutation>()

  const handleCreateOrder = async (data: OrderMutation) => {
    await mutation.mutateAsync(data)
  }

  return { handleCreateOrder }
}
