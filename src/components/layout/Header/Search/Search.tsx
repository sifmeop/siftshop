import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
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
    <Flex className={styles.search}>
      <InputGroup>
        <InputLeftElement h='100%' pointerEvents='none'>
          <BiSearch size='1.5rem' />
        </InputLeftElement>
        <Input
          ref={valueRef}
          h='3.125rem'
          backgroundColor='white'
          roundedRight='none'
          focusBorderColor='green'
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder='Phone...'
        />
      </InputGroup>
      <Button
        h='3.125rem'
        roundedLeft='none'
        colorScheme='green'
        onClick={handleSearch}>
        Search
      </Button>
    </Flex>
  )
}

export default Search
