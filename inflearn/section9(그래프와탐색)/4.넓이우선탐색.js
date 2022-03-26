// 이진트리 넓이 우선 탐색(BFS)
// 1부터 7까지 순차적으로 탐색 예시

function solution(n) {
  let answer = ''
  let queue = []
  queue.push(1)

  while (queue.length) {
    let v = queue.shift()
    answer += `${v} `
    for (let x of [v * 2, v * 2 + 1]) {
      if (x < 8) queue.push(x)
    }
  }

  return answer
}

console.log(solution(1))
