export interface Review {
  id: number
  name: string
  photo: string
  isRated: boolean
  product: Product
  rating: 5
  disadvantages: string
  advantages: string
  review: string
  answers: Answer[]
}

interface Product {
  name: string
  picture: string
}

interface Answer {
  name: string
  photo: string
  answer: string
}
