import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'

export async function compress_im() {
  const files = await imagemin(['original_images/*.{jpg,png}'], {
    destination: 'build/imagemin',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  })

  console.log(files)
}
