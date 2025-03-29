import { compress_im } from './modules/imagemin-test.js'
import { compress_ci } from './modules/compress-images-test.cjs'
import { webpConvertAll } from './modules/webp-converter-test.cjs'

compress_ci()

compress_im().catch((error) => {
  console.error('Error compressing images:', error)
})

webpConvertAll().catch((error) => {
  console.error('Error converting images to WebP:', error)
})
