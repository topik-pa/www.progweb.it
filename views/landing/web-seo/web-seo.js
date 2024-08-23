const $ctaBtn = document.getElementById('cta')
const $ctaSection = document.getElementsByClassName('cta')[0]


$ctaBtn.addEventListener('click', () => {
  window.scrollTo({ top: $ctaSection.offsetTop, behavior: 'smooth' })
})