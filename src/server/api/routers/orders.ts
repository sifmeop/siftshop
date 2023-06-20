import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { z } from 'zod'

export const ordersRouter = createTRPCRouter({
  createOrder: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        data: z.date(),
        order_number: z.string(),
        total: z.number(),
        products: z.array(
          z.object({
            productId: z.string(),
            name: z.string(),
            image: z.string(),
            price: z.number(),
            count: z.number(),
            total: z.number()
          })
        ),
        address: z.string(),
        delivery: z.string(),
        delivery_count: z.number()
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.order.create({
        data: {
          user: { connect: { id: input.userId } },
          data: input.data,
          order_number: input.order_number,
          total: input.total,
          products: {
            create: input.products
          },
          address: input.address,
          delivery: input.delivery,
          delivery_count: input.delivery_count
        }
      })
    }),
  getOrders: publicProcedure
    .input(
      z.object({
        userId: z.string()
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findMany({
        where: {
          userId: input.userId
        },
        include: {
          products: true
        }
      })
    })
})
