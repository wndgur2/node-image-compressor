## Node에서 사용 가능한 image 압축 라이브러리 세 가지가 있습니다.

1. [webp-converter](https://www.npmjs.com/package/webp-converter)
2. [compress-images](https://www.npmjs.com/package/compress-images)
3. [imagemin](https://www.npmjs.com/package/imagemin)

## 특징은 아래와 같습니다.

webp-converter

- commonjs 방식 (require('webp-converter')) 사용
- 1/10 수준 압축률

- 가장 높은 압축률을 자랑합니다.
- 타이젠의 web엔진에서 webp를 지원한다고 합니다. (랜더링 가능하다고 합니다.)
  https://docs.tizen.org/platform/release-notes/tizen-6-0-m2/

compress-images

- commonjs 방식 (require('compress-images')) 사용
- 1/4 수준 압축률

imagemin

- ES6 방식 (import compress_images from 'compress-images') 사용
- 더 쉬운 코드
- 1/4 수준 압축률

## 사용법

modules의 각 라이브러리의 코드를 참고하세요.
