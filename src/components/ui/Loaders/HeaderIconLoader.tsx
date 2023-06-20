import ContentLoader from 'react-content-loader'

const HeaderIconLoader = () => {
  return (
    <ContentLoader
      speed={1}
      width={60}
      height={60}
      viewBox='0 0 60 60'
      backgroundColor='#f3f3f3'
      foregroundColor='#E4E4E4'>
      <rect x='0' y='0' rx='8' ry='8' width='60' height='60' />
    </ContentLoader>
  )
}

export default HeaderIconLoader
