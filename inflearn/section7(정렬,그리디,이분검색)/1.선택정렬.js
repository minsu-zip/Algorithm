// 선택 정렬
// O(n^2)

function solution(arr) {
  let answer = [...arr]

  for (let i = 0; i < answer.length - 1; i++) {
    let idx = i
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[idx] > answer[j]) {
        idx = j
      }
    }
    ;[answer[i], answer[idx]] = [answer[idx], answer[i]]
  }

  return answer
}

let arr = [13, 5, 11, 7, 23, 15]
console.log(solution(arr))
