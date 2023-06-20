import { useRouter } from 'next/router'

const DynamicBrand = () => {
  const router = useRouter()
  console.log(router)

  return <div>DynamicBrand</div>
}

export default DynamicBrand
