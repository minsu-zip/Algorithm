function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length

  let answer = 5
  let index = 0 // shift 연산 시간초과 해결을 위한 index
  const area = cities.map((city) => city.toUpperCase())
  const cache = []
  cache.push(area[index++])

  while (index < area.length) {
    const city = area[index++]
    const cityIndex = cache.indexOf(city)
    if (cityIndex !== -1) {
      cache.splice(cityIndex, 1)
      answer += 1
    } else {
      // 캐시크기가 넘었을 경우만
      if (cache.length >= cacheSize) {
        cache.shift()
      }
      answer += 5
    }
    cache.push(city)
  }

  return answer
}

console.log(solution(5, ['SEOUL', 'SEOUL', 'SEOUL']))
console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ])
)

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
  ])
)

console.log(
  solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
)

console.log(
  solution(5, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
)

console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']))

console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']))
