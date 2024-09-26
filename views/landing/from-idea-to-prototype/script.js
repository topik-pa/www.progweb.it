const $navLinks = document.querySelectorAll('nav a')
const $sections = document.querySelectorAll('.content > section')
const $nexts = document.querySelectorAll('.next')
const debounce = (callback, wait) => {
  let timeoutId = null
  return (...args) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      // eslint-disable-next-line node/no-callback-literal
      callback(...args)
    }, wait)
  }
}

for (let i = 0; i < $navLinks.length; i++) {
  const $link = $navLinks[i]
  $link.addEventListener('click', (e) => {
    e.preventDefault()
    const target = document.querySelector(e.target.hash)
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
  })
}

const handleScroll = debounce(() => {
  console.log(window.scrollY)
  for (let i = 0; i < $sections.length; i++) {
    const $section = $sections[i]
    if (window.scrollY >= $section.offsetTop) {
      for (let i = 0; i < $navLinks.length; i++) {
        $navLinks[i].classList.remove('active')
      }
      $navLinks[i].classList.add('active')
    }
  }
}, 5)
document.addEventListener('scroll', handleScroll)

setTimeout(() => {
  const target = document.querySelector('#one')
  window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
}, 800)

for (let i = 0; i < $nexts.length; i++) {
  const $next = $nexts[i]
  $next.addEventListener('click', (e) => {
    e.preventDefault()
    const target = $sections[i + 1]
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
  })
}
