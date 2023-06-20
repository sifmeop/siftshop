import clsx from 'clsx'
import styles from './Input.module.scss'

interface Props {
  type: React.HTMLInputTypeAttribute
  placeholder: string
  isTextarea?: boolean
  name?: string
}

const Input = ({ type, placeholder, isTextarea = false, name }: Props) => {
  return isTextarea ? (
    <textarea
      className={clsx(styles.input, 'resize-none')}
      cols={30}
      rows={5}
      name={name}
      placeholder='Need a specific delivery day? Sending a gift? Let’s say...'
    />
  ) : (
    <input
      type={type}
      name={name}
      className={styles.input}
      placeholder={placeholder}
    />
  )
}

export default Input
