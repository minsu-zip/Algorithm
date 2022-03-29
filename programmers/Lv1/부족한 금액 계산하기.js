function solution(price, money, count) {
  let answer = 0
  let sum = 0
  for (let i = 1; i <= count; i++) {
    sum += price * i
  }

  answer = sum - money > 0 ? sum - money : 0

  return answer
}

console.log(solution(3, 20, 4)) // 10
