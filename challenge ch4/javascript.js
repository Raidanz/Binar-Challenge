const game = [
  {
    id: '1',
    name: 'batu',
    image: 'batu.png',
  },
  {
    id: '2',
    name: 'kertas',
    image: 'kertas.png',
  },
  {
    id: '3',
    name: 'gunting',
    image: 'gunting.png',
  },
]
let clik = ''
let comClik = ''
let comName = ''
function handleClick(id) {
  clik = id
  const elem = document.getElementById(id)
  elem.classList.add('clik-player')
  elem.classList.remove('default-content')
  randomcom()
}
function randomcom() {
  let timer = 3
  let downloadTimer = setInterval(function () {
    timer -= 1
    comClik = `com-${game[timer].name}-${game[timer].id}`
    const elem = document.getElementById(comClik)
    elem.classList.add('clik-player')
    elem.classList.remove('default-content')
    setTimeout(() => {
      elem.classList.add('default-content')
      elem.classList.remove('clik-player')
    }, 1000)
    if (timer <= 0) {
      clearInterval(downloadTimer)
    }
  }, 1000)
}

let player = '<h1>PLAYER 1</h1>'
for (let i = 0; i < game.length; i++) {
  player += `<div id="player-${game[i].name}-${game[i].id}" class="default-content" onclick="handleClick('player-${game[i].name}-${game[i].id}','${game[i].name}')"><img src="./assets/${game[i].image}" alt="${game[i].name}" class="image-game"></div>`
}
let com = '<h1>COM</h1>'
for (let i = 0; i < game.length; i++) {
  com += `<div id="com-${game[i].name}-${game[i].id}" class="default-content"><img src="./assets/${game[i].image}" alt="${game[i].name}" class="image-game"></div>`
}

document.getElementById('player-set').innerHTML = player
document.getElementById('com-set').innerHTML = com
