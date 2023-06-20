import { type Catalog } from '@/types/catalog.interface'

const APPLE_URL_ICON = '/brand/apple.png'
const XIAOMI_URL_ICON = '/brand/xiaomi.png'
const GOOGLE_URL_ICON = '/brand/google.png'
const SONY_URL_ICON = '/brand/sony.png'
const JBL_URL_ICON = '/brand/jbl.png'
const ASUS_URL_ICON = '/brand/asus.png'
const DELL_URL_ICON = '/brand/dell.png'

export const catalogs: Catalog[] = [
  {
    id: 1,
    name: 'Phones',
    icon: '/catalog/phones.svg',
    href: '/catalog/phones',
    brands: [
      {
        id: 11,
        name: 'Apple',
        icon: APPLE_URL_ICON,
        href: '/catalog/phones/apple'
      },
      {
        id: 14,
        name: 'Google',
        icon: GOOGLE_URL_ICON,
        href: '/catalog/phones/google'
      },
      {
        id: 13,
        name: 'Xiaomi',
        icon: XIAOMI_URL_ICON,
        href: '/catalog/phones/xiaomi'
      }
    ]
  },
  {
    id: 2,
    name: 'Headphones',
    icon: '/catalog/headphones.svg',
    href: '/catalog/headphones',
    brands: [
      {
        id: 31,
        name: 'Apple',
        icon: APPLE_URL_ICON,
        href: '/catalog/headphones/apple'
      },
      {
        id: 35,
        name: 'JBL',
        icon: JBL_URL_ICON,
        href: '/catalog/headphones/jbl'
      },
      {
        id: 34,
        name: 'Sony',
        icon: SONY_URL_ICON,
        href: '/catalog/headphones/sony'
      }
    ]
  },
  {
    id: 3,
    name: 'Laptops',
    icon: '/catalog/laptops.svg',
    href: '/catalog/laptops',
    brands: [
      {
        id: 31,
        name: 'Apple',
        icon: APPLE_URL_ICON,
        href: '/catalog/laptops/apple'
      },
      {
        id: 35,
        name: 'ASUS',
        icon: ASUS_URL_ICON,
        href: '/catalog/laptops/asus'
      },
      {
        id: 34,
        name: 'Dell',
        icon: DELL_URL_ICON,
        href: '/catalog/laptops/dell'
      }
    ]
  }
]
