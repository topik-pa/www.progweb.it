const data = [
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
