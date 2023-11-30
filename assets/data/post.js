const data = [
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
