import { API_URL } from '@/utils/constants'
import clsx from 'clsx'
import Image from 'next/image'
import { memo, useState } from 'react'
import styles from './Gallery.module.scss'

interface Props {
  name: string
  images: string[]
}

const Gallery = ({ name, images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentImage}>
        <Image
          width={500}
          height={600}
          src={`${API_URL}/${images[currentImage] as string}`}
          alt='Selected image from gallery'
          placeholder='blur'
          blurDataURL={`${API_URL}/${images[currentImage] as string}`}
          quality={100}
        />
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <button
            key={image}
            className={clsx(styles.button, {
              [styles.activeImage]: index === currentImage
            })}
            onClick={() => setCurrentImage(index)}>
            <Image
              width={300}
              height={300}
              src={`${API_URL}/${image}`}
              alt={`Image phone ${name}: ${index + 1}`}
              placeholder='blur'
              blurDataURL={`${API_URL}/${image}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default memo(Gallery)
