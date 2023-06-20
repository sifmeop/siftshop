import styles from './Button.module.scss'

interface Props {
  type?: 'button' | 'submit'
  children: React.ReactNode
}

const Button = ({ type = 'button', children }: Props) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
