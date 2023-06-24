import { type Catalog } from '@/types/catalog.interface'
import { BsGoogle, BsLaptop } from 'react-icons/bs'
import { FiHeadphones, FiSmartphone } from 'react-icons/fi'
import {
  SiApple,
  SiAsus,
  SiDell,
  SiJbl,
  SiSony,
  SiXiaomi
} from 'react-icons/si'

const APPLE_URL_ICON = SiApple
const XIAOMI_URL_ICON = SiXiaomi
const GOOGLE_URL_ICON = BsGoogle
const SONY_URL_ICON = SiSony
const JBL_URL_ICON = SiJbl
const ASUS_URL_ICON = SiAsus
const DELL_URL_ICON = SiDell

export const catalogs: Catalog[] = [
  {
    id: 1,
    name: 'Phones',
    icon: FiSmartphone,
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
    icon: FiHeadphones,
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
    icon: BsLaptop,
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
