const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [N, M] = nm.split(' ').map(Number)
const graph = input.map((x) => x.trim().split(''))

const division = (i, j, cnt) => {
  const compare = graph[i][j]

  if (compare === '-') {
    for (let k = j; k < M; k++) {
      if (graph[i][k] === compare) {
        graph[i][k] = cnt
      } else {
        break
      }
    }
  } else if (compare === '|') {
    for (let k = i; k < N; k++) {
      if (graph[k][j] === compare) {
        graph[k][j] = cnt
      } else {
        break
      }
    }
  }
}

function solution() {
  let cnt = 0
  graph.forEach((row, i) => {
    row.forEach((column, j) => {
      if (isNaN(column)) {
        division(i, j, cnt)
        cnt += 1
      }
    })
  })

  return cnt
}

console.log(solution())
