import { results, mbtis } from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const lipEl = document.querySelector('.lip')
const boxEls = document.querySelectorAll('.box')
const heraEls = document.querySelectorAll('.hera')
const lipstickEl = document.querySelector('.lipstick')
const lipstickImgEl = document.querySelector('.lipstick img')

titleEl.innerHTML = result.title
lipEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
heraEls.forEach(function (heraEl, index) {
  heraEl.innerHTML = result.heras[index]
})
lipstickEl.href = result.lipstickUrl
lipstickImgEl.src = result.lipstickImg
