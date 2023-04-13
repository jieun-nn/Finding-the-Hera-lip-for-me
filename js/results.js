import { results, mbtis } from './data.js'

// 주소 쿼리스트링에서 mbti 값을 가져오기!
const mbti = new URLSearchParams(location.search).get('mbti')
const result = results[mbtis[mbti]]

// 결과를 출력할 각 요소를 찾아요!
const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const heraEls = document.querySelectorAll('.hera')
const lipstickEl = document.querySelector('.lipstick')
const lipstickImgEl = document.querySelector('.lipstick img')

// 각 요소에 내용을 채워넣어요!
titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
heraEls.forEach(function (heraEl, index) {
  heraEl.innerHTML = result.heras[index]
})
lipstickEl.href = result.lipstickUrl
lipstickImgEl.src = result.lipstickImg
