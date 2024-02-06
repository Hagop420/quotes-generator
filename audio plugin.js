const audioPlayWhenButtonIsClicked = new Audio()

document.querySelector('button').addEventListener('click', () => {
  audioPlayWhenButtonIsClicked.src =
    'https://www.fesliyanstudios.com/play-mp3/387'

  audioPlayWhenButtonIsClicked.play()
})
