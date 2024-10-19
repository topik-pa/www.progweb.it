const breaktime = {
  init: () => {
    const $target = document.querySelector('#breaktime #showresult')
    const $toShow = document.querySelector('#breaktime code.hidden')

    $target.addEventListener('click', (e) => {
      e.preventDefault()
      $toShow.classList.remove('hidden')
    })
  }
}

export default breaktime
