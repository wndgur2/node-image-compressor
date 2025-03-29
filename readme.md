## 타 프로젝트에 이식하기

### 의존성이 3개입니다.

```
npm i compress-images pngquant-bin@6.0.1 gifsicle@5.2.1
```

### 사용법 (app.js)

```javascript
let compress_images = require('compress-images'),
  INPUT_path_to_your_images,
  OUTPUT_path

INPUT_path_to_your_images = 'src/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
OUTPUT_path = 'build/img/'

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
```
