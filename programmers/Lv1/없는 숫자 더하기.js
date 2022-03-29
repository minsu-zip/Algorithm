function solution(numbers) {
  let answer = 45
  let sum = numbers.reduce((a, b) => a + b, 0)
  answer -= sum
  return answer
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])) // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])) // 6
