// 음식 조합별로 손님이 몇 번 시켰는지 계산
const menu = (combinations, map, len) => {
  for (let i = 0; i < combinations.length - 1; i++) {
    for (let j = 0; j < combinations[i].length; j++) {
      let tmp = combinations[i][j]
      let cnt = 1
      for (let k = i + len; k < combinations.length; k += len) {
        if (combinations[k].includes(tmp)) {
          cnt += 1
        }
      }
      // 최소 2명 이상의 손님 && 코스 조합이 없는 경우
      if (cnt > 1 && !map.get(tmp)) {
        map.set(tmp, cnt)
      }
    }
  }
}

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
  let combinations = []
  // 주어진 course 만큼 조합 구하기
  orders.forEach((x) => {
    // course 길이 만큼 각각의 음식의 조합 구하기
    course.forEach((y) => {
      let comb = getCombinations(x.split(''), y)
      combinations.push(comb.map((x) => x.sort().join('')))
    })
  })

  // // 음식 조합별로 손님이 몇 번 시켰는지 계산
  let map = new Map()
  menu(combinations, map, course.length)
  console.log(map)

  // 주문할 때 가장 많이 함께 주문한 단품메뉴 구하기
  // 즉 동일한 개수의 코스에서 가장 많이 시킨 코스 찾기
  let maxMap = new Map()
  for (const [key, cnt] of map) {
    if (maxMap.has(key.length)) {
      maxMap.set(key.length, Math.max(maxMap.get(key.length), cnt))
    } else {
      maxMap.set(key.length, cnt)
    }
  }

  // 코스 메뉴 구성
  for (const [key, cnt] of map) {
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
