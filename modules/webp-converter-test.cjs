const webp = require('webp-converter')
const fs = require('fs')
const path = require('path')
let i = 0

async function webpConvertAll() {
  // get file names in original_images
  const originalImagesDir = path.join(__dirname, '../original_images')
  const originalImages = fs.readdirSync(originalImagesDir).filter((file) => {
    return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
  })
  originalImages.forEach((file) => {
    const inputPath = path.join(originalImagesDir, file)
    webpConvert(inputPath)
  })
}

async function webpConvert(inputPath) {
  webp
    .cwebp(inputPath, `build/webp-converter/${i++}.webp`, '-q 80', (logging = '-v'))
    .then((response) => {
      console.log(response)
    })
}

module.exports = {
  webpConvertAll,
}
