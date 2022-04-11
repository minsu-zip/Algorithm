const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const n_arr = input.slice(2).map((x) => x.replace('\r', ''))
const m = n_arr.map((x) => String(x).split(' ').map(Number))

function solution() {
  let answer = 0
  let graph = Array.from(Array(n + 1), () => Array(0))
  let visited = Array.from(Array(n + 1).fill(true))

  //인전 리스트
  for ([i, j] of m) {
    graph[i].push(j)
    graph[j].push(i)
  }

  // 1번 컴퓨터
  let queue = [1]
  visited[1] = false

  while (queue.length) {
    let tmp = queue.shift()
    for (let i = 0; i < graph[tmp].length; i++) {
      if (visited[graph[tmp][i]]) {
        queue.push(graph[tmp][i])
        visited[graph[tmp][i]] = false
        answer += 1
      }
    }
  }

  return answer
}

console.log(solution())
