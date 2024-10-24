function debounce (func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this, args) }, timeout)
  }
}

const goto = {
  init: () => {
    const $goto = document.getElementById('goto')
    if (!$goto) return
    const $gotoTop = $goto.getElementsByClassName('top')[0]
    const visibilityLimit = 200
    const classValue = 'visible'
    function toggleVisibility () {
      if (window.scrollY >= visibilityLimit) {
        $goto.classList.add(classValue)
      } else {
        $goto.classList.remove(classValue)
      }
    }

    window.addEventListener('scroll', debounce(toggleVisibility))

    $gotoTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
}

export default goto
