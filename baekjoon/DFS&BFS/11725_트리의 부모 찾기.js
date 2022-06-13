const fs = require('fs')
const [N, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const n = Number(N)
const array = input.map((item) => item.split(' ').map(Number))

function solution() {
  const graph = Array.from(Array(n + 1), () => [])

  // 양방향
  array.forEach(([x, y]) => {
    graph[x].push(y)
    graph[y].push(x)
  })

  //노드 방문처리
  let visited = new Array(n + 1).fill(false)
  visited[1] = true

  //부모의 노드를 가지는 배열
  let parent = new Array(n + 1)
  parent[1] = 1

  //루트 1부터 연결된 노드들을 방문하면서 부모-자식 연결
  const queue = [1]
  while (queue.length) {
    let tmp = queue.shift()
    // 인접 노드 탐색 순회
    for (let j of graph[tmp]) {
      // 방문한적이 없다면 현재 노드가 부모-인접노드가 자식 관계가 된다.
      if (visited[j] === false) {
        visited[j] = true
        parent[j] = tmp
        queue.push(j)
      }
    }
  }

  return parent.slice(2).join('\n')
}

console.log(solution())
