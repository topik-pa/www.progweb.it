const mainMenu = {
  toggleMobileMenu: () => {
    const islandingpage = document.querySelector('body.landing')
    if (islandingpage) return
    const $root = document.getElementById('main-menu')
    const $hamburger = document.querySelector('header .hamburger')
    const $closeMenu = $root.querySelector('.close')
    $hamburger.addEventListener('click', () => {
      $root.classList.toggle('show')
    })
    $closeMenu.addEventListener('click', () => {
      $root.classList.remove('show')
    })
  }
}

export default mainMenu
