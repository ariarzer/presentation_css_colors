const GREEN =     'var(--GREEN)';
const DARK_GREEN = 'var(--DARK_GREEN)';
const PURPLE = 'var(--PURPLE:)';
const DARK_ORANGE = 'var(--DARK_ORANGE)';
const ORANGE = 'var(--ORANGE)';
const BLUE = 'var(--BLUE)';

const grammar = [
  {
    regexp: /(?<=\d)(s)/g,
    color: GREEN
  },
  {
    regexp: /(?<=\d)(px)/g,
    color: GREEN
  },
  {
    regexp: /(?<=\d)(em)/g,
    color: GREEN
  },
  {
    regexp: /(?<=\d)(deg)/g,
    color: GREEN
  },
  {
    regexp: /(?<=\d)(vw)/g,
    color: GREEN
  },
  {
    regexp: /(?<!h)(\d+(?:\.\d+)?)/g,
    color: BLUE
  },
  {
    words: [
      'rgba',
      'colorChange',
      'before',
      'h1-counter',
      'blurry',
      '#el',
      '#id'
    ],
    color: ORANGE
  },
  {
    regexp: /(center[;])/,
    color: GREEN
  },
  {
    regexp: /(?<=\.)(class)/g,
    color: ORANGE
  },
  {
    regexp: /('anim')(?= )/g,
    color: ORANGE
  },
  {
    regexp: /(?<![^'<>])(;)/g,
    color: DARK_ORANGE
  },
  {
    regexp: /(counter)(?=\()/g,
    color: ORANGE
  },
  {
    regexp: /(rgb)(?=\()/g,
    color: ORANGE
  },
  {
    regexp: /(calc)(?=\()/g,
    color: ORANGE
  },
  {
    regexp: /(url)(?=\()/g,
    color: ORANGE
  },
  {
    regexp: /(?<!')(,)/g,
    color: DARK_ORANGE
  },
  {
    regexp: /(?<!au|s)(to)(?!ken)/g,
    color: DARK_ORANGE
  },
  {
    regexp: /(h1)(?!-)/g,
    color: DARK_ORANGE
  },
  {
    words: [
      '@keyframes',
      'div',
      'body',
      'from',
    ],
    color: DARK_ORANGE
  },
  {
    regexp: /(text-align)(?= ::=)/,
    color: DARK_ORANGE
  },
  {
    words: [
      "'::'",
      "':'",
      "','",
      "'center'",
      "'justify'",
      "'left'",
      "'right'",
      "'start'",
      "'end'",
    ],
    color: PURPLE
  },
  {
    words: [
      'initial',
      'unset',
      'inherit',
      'inset',
      'medium',
      'thick',
      'thin',
      'solid',
      'opacity',
      'ease',
      'visibility',
      'visibility',
      'INITIAL',
      'blue',
      'green',
      'infinite',
      'alternate',
      'list-item',
      'red',
    ],
    color: GREEN
  },
  {
    words: [
      '"assets/image.jpeg"',
      '"#blurFilter"',
      '"ololo"',
      '"http://www.example.org/image"',
      '". "'
    ],
    color: DARK_GREEN
  },
];

document.querySelectorAll('.slide pre[lang="css"] code:not([class="no-lang"])').forEach(string => {
  grammar.forEach(({words, color, regexp}) => {
    if (regexp) {
      string.innerHTML = string.innerHTML.replace(regexp, `<span style="color:${color}">$1</span>`);
    } else {
      words.forEach(item => {
        string.innerHTML = string.innerHTML.replace(new RegExp(item, 'g'), `<span style="color:${color}">${item}</span>`);
      })
    }
  })
});
