import { Review } from '@/types/review.interface'
import PageTitle from '@/ui/PageTitle/PageTitle'
import { VStack } from '@chakra-ui/react'
import ReviewItem from './ReviewItem/ReviewItem'

const reviews: Review[] = [
  {
    id: 1,
    name: 'Eugene',
    photo: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg',
    isRated: false,
    product: {
      name: 'fasdfasdf',
      picture: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg'
    },
    rating: 5,
    disadvantages: '',
    advantages: '',
    review: '',
    answers: [
      {
        name: 'Egkfdg',
        photo: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quo.'
      }
    ]
  },
  {
    id: 2,
    name: 'Eugene',
    photo: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg',
    isRated: true,
    product: {
      name: 'fasdfasdf',
      picture: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg'
    },
    rating: 5,
    disadvantages:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, odio.',
    advantages:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, cupiditate!',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quam in molestiae veniam quisquam quod voluptatibus nesciunt distinctio magnam! Possimus?',
    answers: [
      {
        name: 'Egkfdg',
        photo: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quo.'
      },
      {
        name: 'Egkfdg',
        photo: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quo.'
      },
      {
        name: 'Egkfdg',
        photo: 'https://content2.rozetka.com.ua/goods/images/big/65915159.jpg',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quo.'
      }
    ]
  }
]

const Reviews = () => {
  return (
    <>
      <PageTitle>Reviews</PageTitle>
      <VStack align='stretch' gap={4}>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </VStack>
    </>
  )
}

export default Reviews
