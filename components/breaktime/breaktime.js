const breaktime = {
  init: () => {
    const $target = document.querySelector('#breaktime #showresult') || null
    const $toShow = document.querySelector('#breaktime code.hidden') || null

    if (!$target || !$toShow) return
    $target.addEventListener('click', (e) => {
      e.preventDefault()
      $toShow.classList.remove('hidden')
    })
  }
}

export default breaktime
