// 동전교환(냅색 알고리즘)
// 일반적인 그리디로 문제 해결

function solution(arr, n) {
  let answer = 0
  let coin = [...arr].sort((a, b) => b - a)
  let cnt = 0
  coin.forEach((x) => {
    answer += parseInt(n / x)
    n = n % x
  })

  return answer
}

console.log(solution([1, 2, 5], 15))
