import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import styles from './Search.module.scss'

interface Props {
  onCloseNav: () => void
}

const Search = ({ onCloseNav }: Props) => {
  const router = useRouter()

  const valueRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    if (!valueRef.current?.value) return
    onCloseNav()
    router.push(`/search?value=${valueRef.current.value}`)
    valueRef.current.value = ''
  }

  return (
    <div className={styles.search}>
      <Image
        className={styles.icon}
        width={30}
        height={30}
        src='/icons/search.svg'
        alt='Search icon'
      />
      <input
        ref={valueRef}
        type='text'
        className={styles.input}
        placeholder='Phone...'
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button className={styles.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default Search
