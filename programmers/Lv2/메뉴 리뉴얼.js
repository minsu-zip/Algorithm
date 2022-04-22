// 순열 구하는 함수
const getCombinations = function (arr, selectNumber) {
  const results = []
  if (selectNumber === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1)
    const combinations = getCombinations(rest, selectNumber - 1)
    const attached = combinations.map((el) => [fixed, ...el])
    results.push(...attached)
  })

  return results
}

function solution(orders, course) {
  let answer = []
  let ordered = {}
  let combinations = []

  // 주어진 course 만큼 조합 구하기
  course.forEach((x) => {
    // course 길이 만큼 각각의 음식의 조합 구하기
    orders.forEach((y) => {
      let comb = getCombinations(y.split(''), x)
      combinations.push(comb.map((x) => x.sort().join('')))
    })
  })

  // 음식 조합별 주문 횟수 구하기
  combinations.forEach((x) =>
    x.forEach((y) => (ordered[y] = (ordered[y] || 0) + 1))
  )

  // 주문할 때 가장 많이 함께 주문한 단품메뉴 구하기
  // 즉 동일한 개수의 코스에서 가장 많이 시킨 코스 찾기
  let maxMap = new Map()
  for (const [key, cnt] of Object.entries(ordered)) {
    if (cnt > 1) {
      if (maxMap.has(key.length)) {
        maxMap.set(key.length, Math.max(maxMap.get(key.length), cnt))
      } else {
        maxMap.set(key.length, cnt)
      }
    }
  }

  // 코스 메뉴 구성
  for (const [key, cnt] of Object.entries(ordered)) {
    if (cnt >= maxMap.get(key.length)) {
      answer.push(key)
    }
  }
  answer = answer.sort()

  return answer
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
)
console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
)
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]))
