const $navLinks = document.querySelectorAll('nav a')
// const $ctaSection = document.getElementsByClassName('cta')[0]

for (let i = 0; i < $navLinks.length; i++) {
  const $link = $navLinks[i]
  $link.addEventListener('click', (e) => {
    e.preventDefault()
    const target = document.querySelector(e.target.hash)
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
  })
}
