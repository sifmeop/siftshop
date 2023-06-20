import { fetchSearch } from '@/service/fetchSearch'
import Loader from '@/ui/Loaders/Loader/Loader'
import PageTitle from '@/ui/PageTitle/PageTitle'
import ProductList from '@/ui/ProductList/ProductList'
import { pluralizeResults } from '@/utils/pluralizeResults'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const Search = () => {
  const { query } = useRouter()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', query.value],
    queryFn: () => fetchSearch(query.value)
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <h1 className='page__subtitle'>
        Error while fetching results for{' '}
        <span className='text-primary'>{query.value}</span>
      </h1>
    )
  }

  if (!data?.length) {
    return (
      <h1 className='page__subtitle'>
        There are no products that match{' '}
        <span className='text-primary'>{`"${query.value}"`}</span>
      </h1>
    )
  }

  return (
    <>
      <PageTitle>
        Showing {pluralizeResults(data.length)} for{' '}
        {<span className='text-primary'>{`"${query.value}"`}</span>}
      </PageTitle>
      <ProductList products={data} breadcrumbs={[{ title: 'Search' }]} />
    </>
  )
}

export default Search
