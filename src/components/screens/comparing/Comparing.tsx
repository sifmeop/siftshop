import { useComparingStore } from '@/stores/comparingStore'
import PageTitle from '@/ui/PageTitle/PageTitle'
import { categories } from '@/utils/constants'
import { Divider, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ComparingFeature from './ComparingFeature/ComparingFeature'
import ComparingProducts from './ComparingProducts/ComparingProducts'

const Comparing = () => {
  const { categories: store } = useComparingStore((state) => state)

  const { query } = useRouter()

  const comparing = store.filter((item) => item.category === query.category)[0]

  if (
    categories.some((category) => category.category === query.category) ===
    false
  ) {
    return <Text className='comparing__message'>No such category</Text>
  }

  if (comparing === undefined) {
    return (
      <Text className='comparing__message'>
        There are no products to compare. Add products to the comparison of
        characteristics and choose the most suitable product for you.
      </Text>
    )
  }

  return (
    <>
      <PageTitle>List of comparisons</PageTitle>
      <ComparingProducts comparing={comparing} />
      {comparing.products.length > 1 && (
        <>
          <Text className='text-center text-xl font-semibold'>
            Characteristics
          </Text>
          <Divider marginBlock='3' />
          <ComparingFeature comparing={comparing.products} />
        </>
      )}
    </>
  )
}

export default Comparing
