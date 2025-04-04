const data = [
  {
    id: '016-html-tag-dialog-utilizzo-esempi',
    topic: 'html',
    year: 2025,
    month: 1
  },
  {
    id: '015-javascript-throttle-debounce-definizione-esempi',
    topic: 'js',
    year: 2025,
    month: 1
  },
  {
    id: '014-progettazione-software-sviluppo-evoluzionistico',
    topic: 'eng',
    year: 2025,
    month: 1
  },
  {
    id: '013-html-attributo-loading-lazy-load',
    topic: 'html',
    year: 2024,
    month: 12
  },
  {
    id: '012-css-variabili-sintassi-esempi',
    topic: 'css',
    year: 2024,
    month: 11
  },
  {
    id: '011-javascript-promise-definizione-sintassi-esempi',
    topic: 'js',
    year: 2024,
    month: 10
  },
  {
    id: '010-javascript-generator-definizione-esempi',
    topic: 'js',
    year: 2024,
    month: 10
  },
  {
    id: '009-security-by-design-principi',
    topic: 'sec',
    year: 2024,
    month: 9
  },
  {
    id: '008-confronto-portali-ecommerce-moda-italiani',
    topic: 'analysis',
    year: 2024,
    month: 6
  },
  {
    id: '007-curriculum-efficace-esempio-developer',
    topic: 'work',
    year: 2024,
    month: 5
  },
  {
    id: '005-javascript-html-tabella-dinamica',
    topic: 'code',
    year: 2024,
    month: 5
  },
  {
    id: '006',
    topic: 'eng',
    year: 2024,
    month: 4
  },
  {
    id: '005',
    topic: 'code',
    year: 2024,
    month: 3
  },
  {
    id: '004',
    topic: 'css',
    year: 2024,
    month: 3
  },
  {
    id: '003',
    topic: 'node',
    year: 2023,
    month: 12
  },
  {
    id: '002',
    topic: 'eng',
    year: 2023,
    month: 11
  },
  {
    id: '001',
    topic: 'html',
    year: 2023,
    month: 10
  },
  {
    id: '000',
    topic: 'js',
    year: 2023,
    month: 9
  }
]

exports.getPostCountByTopic = (topic) => {
  let result = 0
  for (const post of data) {
    if (post.topic === topic) {
      result++
    }
  }
  return result
}

exports.getPostCountByData = (year, month) => {
  let result = 0
  for (const post of data) {
    if (post.year === year && post.month === month) {
      result++
    }
  }
  return result
}
