// 공주 구하기 (큐)
// O(n)

function solution(N, K) {
  let answer = 0
  let arr = Array.from(Array(N), (_, i) => i + 1)

  let i = 1

  while (arr.length !== 1) {
    // K 배수일 때만 제거
    if (i % K === 0) {
      arr.shift()
    } else {
      // K 배수가 아닐 때 제일 앞 요소를 제일 뒤에 삽입
      let tmp = arr.shift()
      arr.push(tmp)
    }
    i++
  }

  answer = arr[0]
  return answer
}

console.log(solution(8, 3)) // 7
