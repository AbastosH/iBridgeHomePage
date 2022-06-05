window.addEventListener(`scroll`, onScroll)

onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
  showNavOnScroll()

  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(integrations)
  activateMenuAtCurrentSection(statments)
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function activateMenuAtCurrentSection(section) {
  //verificar se a seção passou da linha

  const targetLine = scrollY + innerHeight / 2

  //o topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  /*  console.log(
    'O Topo da seção chegou ou passou da linha ?',
    sectionTopReachOrPassedTargetLine
  ) */

  //verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  //seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  /*  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline) */

  //limite da seção
  const sectionBounderies =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBounderies) {
    menuElement.classList.add('active')
  }
}
