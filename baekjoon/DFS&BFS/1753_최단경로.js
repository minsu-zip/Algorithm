const fs = require('fs')
const [VE, k, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [V, E] = VE.split(' ').map(Number)
const K = Number(k)
const array = input.map((x) => x.split(' ').map(Number))

// 최소힙 알고리즘
class MinHeap {
  constructor() {
    this.nodes = []
  }

  insert(value) {
    this.nodes.push(value)
    this.bubbleUp()
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return

    const currentNode = this.nodes[index]
    const parentIndex = Math.floor((index - 1) / 2)
    const parentNode = this.nodes[parentIndex]
    if (parentNode.cost <= currentNode.cost) return

    this.nodes[index] = parentNode
    this.nodes[parentIndex] = currentNode
    index = parentIndex
    this.bubbleUp(index)
  }

  extract() {
    const min = this.nodes[0]
    if (this.nodes.length === 1) {
      this.nodes.pop()
      return min
    }
    this.nodes[0] = this.nodes.pop()
    this.trickleDown()
    return min
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2
    const length = this.nodes.length
    let minimum = index

    if (!this.nodes[rightChildIndex] && !this.nodes[leftChildIndex]) return
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex].cost < this.nodes[minimum].cost) {
        minimum = leftChildIndex
      }
      return
    }

    if (this.nodes[leftChildIndex].cost > this.nodes[rightChildIndex].cost) {
      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex].cost < this.nodes[minimum].cost
      ) {
        minimum = rightChildIndex
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex].cost < this.nodes[minimum].cost
      ) {
        minimum = leftChildIndex
      }
    }

    if (minimum !== index) {
      let t = this.nodes[minimum]
      this.nodes[minimum] = this.nodes[index]
      this.nodes[index] = t
      this.trickleDown(minimum)
    }
  }
}

const dijkstra = (graph) => {
  const distance = Array.from(Array(V + 1).fill(Infinity)) // 노드간 거리
  distance[0] = -1 // 사용 X
  distance[K] = 0 // 시작 노드
  const minHeap = new MinHeap()
  const start = {
    vertex: K,
    cost: 0,
  }
  minHeap.insert(start)

  while (minHeap.nodes.length) {
    const { vertex, cost } = minHeap.extract()

    if (graph[vertex] === undefined) continue // 연결 노드가 없는 경우
    if (distance[vertex] < cost) continue // 기존 비용보다 현재 노드를 거친 비용이 큰 경우

    for ([v, w] of graph[vertex]) {
      // 기존 비용보다 <= 연결된 노드의 비용 + 현재 노드의 비용이 더 큰 경우
      if (distance[v] <= distance[vertex] + w) continue
      // 기존 비용 업데이트
      distance[v] = distance[vertex] + w
      // 연결된 노드 삽입
      const head = {
        vertex: v,
        cost: distance[vertex] + w,
      }
      minHeap.insert(head)
    }
  }
  return distance
}

function solution() {
  const graph = Array.from(Array(V + 1), () => Array(0))
  array.forEach(([u, v, w]) => {
    graph[u].push([v, w])
  })

  const distance = dijkstra(graph)

  distance.shift()
  const answer = distance.map((x) => (x === Infinity ? 'INF' : x))
  answer.forEach((x) => console.log(x))
}
solution()
