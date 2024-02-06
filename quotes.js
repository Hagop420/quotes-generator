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

  // more quotes

  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.<br><em><span class="Albert">- Albert Schweitzer</span></em>',
  'The only way to do great work is to love what you do.<br><em><span class="Steve">- Steve Jobs</span></em>',
  'Don\'t watch the clock; do what it does. Keep going.<br><em><span class="Sam">- Sam Levenson</span></em>',
  'Success is not how high you have climbed, but how you make a positive difference to the world.<br><em><span class="Roy">- Roy T. Bennett</span></em>',
  'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.<br><em><span class="Roy">- Roy T. Bennett</span></em>',
  'Success is walking from failure to failure with no loss of enthusiasm.<br><em><span class="Winston">- Winston Churchill</span></em>',
  'It does not matter how slowly you go as long as you do not stop.<br><em><span class="Confucius">- Confucius</span></em>',
  'The only place where success comes before work is in the dictionary.<br><em><span class="Vidal">- Vidal Sassoon</span></em>',
  'Success is not in what you have, but who you are.<br><em><span class="Bo">- Bo Bennett</span></em>',
  'Believe you can and you\'re halfway there.<br><em><span class="Theodore">- Theodore Roosevelt</span></em>',
  'The only limit to our realization of tomorrow will be our doubts of today.<br><em><span class="Franklin">- Franklin D. Roosevelt</span></em>',
  'The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it.<br><em><span class="Jordan">- Jordan Belfort</span></em>',
  'You are never too old to set another goal or to dream a new dream.<br><em><span class="C.S.">- C.S. Lewis</span></em>',
  'Opportunities don\'t happen, you create them.<br><em><span class="Chris">- Chris Grosser</span></em>',
  'Success usually comes to those who are too busy to be looking for it.<br><em><span class="Henry">- Henry David Thoreau</span></em>',
  'The road to success and the road to failure are almost exactly the same.<br><em><span class="Colin">- Colin R. Davis</span></em>',
  'The only way to achieve the impossible is to believe it is possible.<br><em><span class="Charles">- Charles Kingsleigh</span></em>',
  'You miss 100% of the shots you don’t take.<br><em><span class="Wayne">- Wayne Gretzky</span></em>',
  'Don’t let yesterday take up too much of today.<br><em><span class="Will">- Will Rogers</span></em>',
  'The only person you are destined to become is the person you decide to be.<br><em><span class="Ralph">- Ralph Waldo Emerson</span></em>',
  'The best time to plant a tree was 20 years ago. The second best time is now.<br><em><span class="Chinese">- Chinese Proverb</span></em>',
  'Your time is limited, don\'t waste it living someone else\'s life.<br><em><span class="Steve">- Steve Jobs</span></em>',
  'The way to get started is to quit talking and begin doing.<br><em><span class="Walt">- Walt Disney</span></em>',
  'The future belongs to those who believe in the beauty of their dreams.<br><em><span class="Eleanor">- Eleanor Roosevelt</span></em>',
  'Life is 10% what happens to us and 90% how we react to it.<br><em><span class="Charles">- Charles R. Swindoll</span></em>',
  'The only person you should try to be better than is the person you were yesterday.<br><em><span class="Anonymous">- Anonymous</span></em>',
  'The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.<br><em><span class="Mark">- Mark Zuckerberg</span></em>',
  'Do not wait to strike till the iron is hot, but make it hot by striking.<br><em><span class="William">- William Butler Yeats</span></em>',
  'Success is not the result of spontaneous combustion. You must set yourself on fire.<br><em><span class="Arnold">- Arnold H. Glasow</span></em>',
  'The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle.<br><em><span class="Steve">- Steve Jobs</span></em>',
  'The only limit to our realization of tomorrow will be our doubts of today.<br><em><span class="Franklin">- Franklin D. Roosevelt</span></em>',
  'If you want to lift yourself up, lift up someone else.<br><em><span class="Booker">- Booker T. Washington</span></em>',
  "Nothing is impossible, the word itself says 'I'm possible'!<br><em><span class=\"Audrey\">- Audrey Hepburn</span></em>",
  'Believe you can and you\'re halfway there.<br><em><span class="Theodore">- Theodore Roosevelt</span></em>',
  'There are no shortcuts to any place worth going.<br><em><span class="Beverly">- Beverly Sills</span></em>',
  'The best revenge is massive success.<br><em><span class="Frank">- Frank Sinatra</span></em>',
  'People who are crazy enough to think they can change the world, are the ones who do.<br><em><span class="Rob">- Rob Siltanen</span></em>',
  'Don’t count the days, make the days count.<br><em><span class="Muhammad">- Muhammad Ali</span></em>',
  'The only way to achieve the impossible is to believe it is possible.<br><em><span class="Charles">- Charles Kingsleigh</span></em>',
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

    // more quotes all cases here

    case 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.<br><em><span class="Albert">- Albert Schweitzer</span></em>':
      document.body.style.backgroundColor = 'lightgreen'
      break
    case 'The only way to do great work is to love what you do.<br><em><span class="Steve">- Steve Jobs</span></em>':
      document.body.style.backgroundColor = 'lightcoral'
      break
    case 'Don\'t watch the clock; do what it does. Keep going.<br><em><span class="Sam">- Sam Levenson</span></em>':
      document.body.style.backgroundColor = 'lightyellow'
      break
    case 'Success is not how high you have climbed, but how you make a positive difference to the world.<br><em><span class="Roy">- Roy T. Bennett</span></em>':
      document.body.style.backgroundColor = 'lightskyblue'
      break
    case 'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.<br><em><span class="Roy">- Roy T. Bennett</span></em>':
      document.body.style.backgroundColor = 'lightseagreen'
      break
    case 'Success is walking from failure to failure with no loss of enthusiasm.<br><em><span class="Winston">- Winston Churchill</span></em>':
      document.body.style.backgroundColor = 'lightcoral'
      break
    case 'It does not matter how slowly you go as long as you do not stop.<br><em><span class="Confucius">- Confucius</span></em>':
      document.body.style.backgroundColor = 'lightpink'
      break
    case 'The only place where success comes before work is in the dictionary.<br><em><span class="Vidal">- Vidal Sassoon</span></em>':
      document.body.style.backgroundColor = 'lightgoldenrodyellow'
      break
    case 'Success is not in what you have, but who you are.<br><em><span class="Bo">- Bo Bennett</span></em>':
      document.body.style.backgroundColor = 'lightblue'
      break
    case 'Believe you can and you\'re halfway there.<br><em><span class="Theodore">- Theodore Roosevelt</span></em>':
      document.body.style.backgroundColor = 'lightgreen'
      break
    case 'The only limit to our realization of tomorrow will be our doubts of today.<br><em><span class="Franklin">- Franklin D. Roosevelt</span></em>':
      document.body.style.backgroundColor = 'lightcoral'
      break
    case 'The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it.<br><em><span class="Jordan">- Jordan Belfort</span></em>':
      document.body.style.backgroundColor = 'lightyellow'
      break
    case 'You are never too old to set another goal or to dream a new dream.<br><em><span class="C.S.">- C.S. Lewis</span></em>':
      document.body.style.backgroundColor = 'lightskyblue'
      break
    case 'Opportunities don\'t happen, you create them.<br><em><span class="Chris">- Chris Grosser</span></em>':
      document.body.style.backgroundColor = 'lightseagreen'
      break
    case 'Success usually comes to those who are too busy to be looking for it.<br><em><span class="Henry">- Henry David Thoreau</span></em>':
      document.body.style.backgroundColor = 'lightpink'
      break
    case 'The road to success and the road to failure are almost exactly the same.<br><em><span class="Colin">- Colin R. Davis</span></em>':
      document.body.style.backgroundColor = 'lightgoldenrodyellow'
      break
    case 'The only way to achieve the impossible is to believe it is possible.<br><em><span class="Charles">- Charles Kingsleigh</span></em>':
      document.body.style.backgroundColor = 'lightblue'
      break
    case 'You miss 100% of the shots you don’t take.<br><em><span class="Wayne">- Wayne Gretzky</span></em>':
      document.body.style.backgroundColor = 'lightgreen'
      break
    case 'Don’t let yesterday take up too much of today.<br><em><span class="Will">- Will Rogers</span></em>':
      document.body.style.backgroundColor = 'lightcoral'
      break
    case 'The only person you are destined to become is the person you decide to be.<br><em><span class="Ralph">- Ralph Waldo Emerson</span></em>':
      document.body.style.backgroundColor = 'lightyellow'
      break
    case 'The best time to plant a tree was 20 years ago. The second best time is now.<br><em><span class="Chinese">- Chinese Proverb</span></em>':
      document.body.style.backgroundColor = 'lightskyblue'
      break
    case 'Your time is limited, don\'t waste it living someone else\'s life.<br><em><span class="Steve">- Steve Jobs</span></em>':
      document.body.style.backgroundColor = 'lightseagreen'
      break
    case 'The way to get started is to quit talking and begin doing.<br><em><span class="Walt">- Walt Disney</span></em>':
      document.body.style.backgroundColor = 'lightpink'
      break
    case 'The future belongs to those who believe in the beauty of their dreams.<br><em><span class="Eleanor">- Eleanor Roosevelt</span></em>':
      document.body.style.backgroundColor = 'lightgoldenrodyellow'
      break
    case 'Life is 10% what happens to us and 90% how we react to it.<br><em><span class="Charles">- Charles R. Swindoll</span></em>':
      document.body.style.backgroundColor = 'lightblue'
      break
    case 'The only person you should try to be better than is the person you were yesterday.<br><em><span class="Anonymous">- Anonymous</span></em>':
      document.body.style.backgroundColor = 'lightgreen'
      break
    case 'The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.<br><em><span class="Mark">- Mark Zuckerberg</span></em>':
      document.body.style.backgroundColor = 'lightcoral'
      break
    case 'Do not wait to strike till the iron is hot, but make it hot by striking.<br><em><span class="William">- William Butler Yeats</span></em>':
      document.body.style.backgroundColor = 'lightyellow'
      break
    case 'Success is not the result of spontaneous combustion. You must set yourself on fire.<br><em><span class="Arnold">- Arnold H. Glasow</span></em>':
      document.body.style.backgroundColor = 'lightskyblue'
      break
    case 'The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle.<br><em><span class="Steve">- Steve Jobs</span></em>':
      document.body.style.backgroundColor = 'lightseagreen'
      break
    case 'If you want to lift yourself up, lift up someone else.<br><em><span class="Booker">- Booker T. Washington</span></em>':
      document.body.style.backgroundColor = 'lightpink'
      break
    case "Nothing is impossible, the word itself says 'I'm possible'!<br><em><span class=\"Audrey\">- Audrey Hepburn</span></em>":
      document.body.style.backgroundColor = 'lightgoldenrodyellow'
      break
    case 'Believe you can and you\'re halfway there.<br><em><span class="Theodore">- Theodore Roosevelt</span></em>':
      document.body.style.backgroundColor = 'lightblue'
      break
    case 'There are no shortcuts to any place worth going.<br><em><span class="Beverly">- Beverly Sills</span></em>':
      document.body.style.backgroundColor = 'lightgreen'
      break
    case 'The best revenge is massive success.<br><em><span class="Frank">- Frank Sinatra</span></em>':
      document.body.style.backgroundColor = 'lightcoral'
      break
    case 'People who are crazy enough to think they can change the world, are the ones who do.<br><em><span class="Rob">- Rob Siltanen</span></em>':
      document.body.style.backgroundColor = 'lightyellow'
      break
    case 'Don’t count the days, make the days count.<br><em><span class="Muhammad">- Muhammad Ali</span></em>':
      document.body.style.backgroundColor = 'lightskyblue'
      break
    case 'The only way to achieve the impossible is to believe it is possible.<br><em><span class="Charles">- Charles Kingsleigh</span></em>':
      document.body.style.backgroundColor = 'lightseagreen'
      break
    default:
      document.body.style.backgroundColor = 'white'
      break
  }
})

let count = 0

document.querySelector('button.start').addEventListener('click', () => {
  if (count > 0) {
    return
  } else {
    // const iframe_muted = document.querySelector('body>iframe')
    const iframe_muted = document.querySelector('body>iframe')

    iframe_muted.src =
      'https://www.youtube-nocookie.com/embed/ZQNTcxdU8xw?si=eQCuUIhWG-rQtq2b&autoplay=1'
    count += 1
  }

  const parentFl = document.createElement('div')
  parentFl.className = 'parentFlexed'

  const createButtonStopper = document.createElement('button')
  createButtonStopper.className = 'stop'
  createButtonStopper.innerHTML = '<span class=red>⏸ </span> &nbsp;Pause audio'

  // play btn

  const createButtonPlayer = document.createElement('button')
  createButtonPlayer.className = 'play'
  createButtonPlayer.innerHTML = '<span class=red>▶️ </span> &nbsp;Play audio'

  parentFl.appendChild(createButtonStopper)
  parentFl.appendChild(createButtonPlayer)

  document.querySelector('main').appendChild(parentFl)

  // play btn end

  // pause iframe
  document.querySelector('.stop').addEventListener('click', () => {
    const iframe_muted = document.querySelector('body>iframe')

    iframe_muted.src =
      'https://www.youtube-nocookie.com/embed/ZQNTcxdU8xw?si=eQCuUIhWG-rQtq2b&muted=1'

    const audioPlayWhenButtonIsClicked = new Audio()

    audioPlayWhenButtonIsClicked.src =
      'https://www.fesliyanstudios.com/play-mp3/387'

    audioPlayWhenButtonIsClicked.play()
  })

  document.querySelector('.play').addEventListener('click', () => {
    const iframe_muted = document.querySelector('body>iframe')

    iframe_muted.src =
      'https://www.youtube-nocookie.com/embed/ZQNTcxdU8xw?si=eQCuUIhWG-rQtq2b&autoplay=1'

    const audioPlayWhenButtonIsClicked = new Audio()

    audioPlayWhenButtonIsClicked.src =
      'https://www.fesliyanstudios.com/play-mp3/387'

    audioPlayWhenButtonIsClicked.play()
  })
})

// document.querySelector('body').addEventListener('mouseout', () => {
//   const iframe_muted = document.querySelector('iframe')

//   iframe_muted.src =
//     'https://www.youtube.com/embed/OydH5P_Wru8?autoplay=1&mute=1'
// })
