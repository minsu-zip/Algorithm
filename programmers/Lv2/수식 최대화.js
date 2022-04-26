// 순열 구하는 함수
const getPermutations = function (arr, selectNumber) {
  const results = []
  if (selectNumber === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
    const permutations = getPermutations(rest, selectNumber - 1)
    const attached = permutations.map((el) => [fixed, ...el])
    results.push(...attached)
  })

  return results
}

function solution(expression) {
  let answer = 0
  let arr = expression.match(/\d+|\*|-|\+/g) // 숫자 + 연산자 조합으로 추출
  let operation = [] // [숫자, 연산자] 쌍으로 들어간다.
  for (let i = 0; i < arr.length; i += 2) {
    operation.push([arr[i], arr[i + 1] || ''])
  }

  // 연산자 우선 순위 조합 구하기
  let regExp = new Set(expression.match(/\-|\*|\+/g))
  let permutations = getPermutations([...regExp], regExp.size)

  // 조합으로 만든 우선 순위 순서대로 operation에 해당 연산자가 있으면
  // 해당 배열과 바로 뒤 배열과 연산 수행
  permutations.forEach((priority) => {
    // 2차원 배열 복사
    let copy = operation.map((_, idx) => [...operation[idx]])
    priority.forEach((arithmetic) => {
      let i = 0
      while (copy.length > i) {
        // 우선 순위 연산자가 있을 경우
        // [i][1] = 숫자, [i][1] = 연산자가 있다는 것을 인지
        if (copy[i][1] === arithmetic) {
          copy[i][0] = String(
            eval(`${copy[i][0]}${arithmetic}${copy[i + 1][0]}`)
          )
          copy[i][1] = copy[i + 1][1]
          copy.splice(i + 1, 1) // 연산이 수행된 배열은 제거
          i = 0 // 처음부터 다시 확인
        } else {
          i += 1
        }
      }
    })
    answer = Math.max(answer, Number(Math.abs(copy[0][0])))
  })

  return answer
}

console.log(solution('100-200*300-500+20')) // 60420
console.log(solution('50*6-3*2')) // 300
