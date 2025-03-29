const compress_images = require('compress-images')

function compress_ci() {
  const INPUT_path_to_your_images = 'original_images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
  const OUTPUT_path = 'build/compress-images/'

  compress_images(
    INPUT_path_to_your_images,
    OUTPUT_path,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } },
    function (error, completed, statistic) {
      console.log('-------------')
      console.log(error)
      console.log(completed)
      console.log(statistic)
      console.log('-------------')
    }
  )
}

module.exports.compress_ci = compress_ci
