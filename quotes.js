const quotes = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall. <br><em>- Nelson <span class=orange>Mandela</em></span>',

  'The only person who can hold you back is yourself. <br><em><span class=tate>- Andrew Tate</em></span>',

  'Do the impossible and you’ll never doubt yourself ever again. <br><em><span class=tate>- Andrew Tate</em></span>',

  'Find a person who is as successful as you’d like to be, ask them what to do, do it and work hard. <br><em><span class=tate>- Andrew Tate</em></span>',

  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. <br><em><span class=steve>- Steve Jobs</em></span>",

  'If life were predictable it would cease to be life, and be without flavor. <br><em><span class=elenor>- Eleanor Roosevelt</em></span>',

  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <br><em><span class=oprah>- Oprah Winfrey</em></span>",

  'What you get by achieving your goals is not as important as what you become by achieving your goals.<br><em><span class=xig>- Zig Ziglar</em></span>',

  'If  you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.” <br><em><span class=James>– James Cameron</em></span>',
]

document.querySelector('figure>button').addEventListener('click', (e) => {
  const get_random_quote = Math.floor(Math.random() * quotes.length)

  document.querySelector('main h2').innerHTML = quotes[get_random_quote]

  document.querySelector('iframe')
  // switch statement backgroung chg.

  switch (quotes[get_random_quote]) {
    case 'The greatest glory in living lies not in never falling, but in rising every time we fall. <br><em>- Nelson <span class=orange>Mandela</em></span>':
      document.body.style.backgroundColor = 'lightcyan'
      break

    case 'The way to get started is to quit talking and begin doing. <br><em><span class=disney>- Walt Disney</em></span>':
      document.body.style.backgroundColor = 'limegreen'
      break

    case "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. <br><em><span class=steve>- Steve Jobs</em></span>":
      document.body.style.backgroundColor = 'darkgrey'
      break

    case 'If life were predictable it would cease to be life, and be without flavor. <br><em><span class=elenor>- Eleanor Roosevelt</em></span>':
      document.body.style.backgroundColor = 'salmon'
      break

    case 'If life were predictable it would cease to be life, and be without flavor. <br><em><span class=elenor>- Eleanor Roosevelt</em></span>':
      document.body.style.backgroundColor = 'salmon'
      break

    case "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <br><em><span class=oprah>- Oprah Winfrey</em></span>":
      document.body.style.backgroundColor = 'cyan'
      break

    case 'What you get by achieving your goals is not as important as what you become by achieving your goals.<br><em><span class=xig>- Zig Ziglar</em></span>':
      document.body.style.backgroundColor = '#ccc'
      break

    case 'If  you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.” <br><em><span class=James>– James Cameron</em></span>':
      document.body.style.backgroundColor = 'blue'
      break

    case 'The only person who can hold you back is yourself. <br><em><span class=tate>- Andrew Tate</em></span>':
      break

    case 'Find a person who is as successful as you’d like to be, ask them what to do, do it and work hard. <br><em><span class=tate>- Andrew Tate</em></span>':
      document.body.style.backgroundColor = 'lightblue'
      break

    case 'Do the impossible and you’ll never doubt yourself ever again. <br><em><span class=tate>- Andrew Tate</em></span>':
      document.body.style.backgroundColor = 'wheat'
      break
  }
})

let count = 0

document.querySelector('button').addEventListener('click', () => {
  if (count > 0) {
    return
  } else {
    const iframe_muted = document.querySelector('body>iframe')

    iframe_muted.src =
      'https://www.youtube-nocookie.com/embed/ZQNTcxdU8xw?si=eQCuUIhWG-rQtq2b&autoplay=1'
    count += 1
  }
})

// document.querySelector('body').addEventListener('mouseout', () => {
//   const iframe_muted = document.querySelector('iframe')

//   iframe_muted.src =
//     'https://www.youtube.com/embed/OydH5P_Wru8?autoplay=1&mute=1'
// })
