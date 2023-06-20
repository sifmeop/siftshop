import ShortUniqueId from 'short-unique-id'

export const generateOrderId = () => {
  const uid = new ShortUniqueId()
  return `#${uid.randomUUID(8)}`
}
