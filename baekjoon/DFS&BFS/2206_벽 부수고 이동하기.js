const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m] = nm.split(' ').map(Number)
const graph = input.map((x) => x.trim().split('').map(Number))

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// 큐 클래스
class Queue {
  constructor() {
    this.head = null // 제일 앞 노드
    this.rear = null // 제일 뒤 노드
    this.length = 0 // 노드의 길이
  }

  enqueue(data) {
    // 노드 추가.
    const node = new Node(data) // data를 가진 node를 만들어준다.
    if (!this.head) {
      // 헤드가 없을 경우 head를 해당 노드로
      this.head = node
    } else {
      this.rear.next = node // 아닐 경우 마지막의 다음 노드로
    }
    this.rear = node // 마지막을 해당 노드로 한다.
    this.length++
  }

  dequeue() {
    // 노드 삭제.
    if (!this.head) {
      // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
      return false
    }
    const data = this.head.data // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
    this.head = this.head.next
    this.length--

    return data
  }
}

// 인덱스 검증
const isRange = (mx, my) => {
  if (mx >= 0 && my >= 0 && mx < n && my < m) {
    return true
  }
  return false
}

function solution() {
  let answer = -1
  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]
  const visited = Array.from(Array(n), () => Array(m).fill(0))
  const queue = new Queue()
  // 시작 좌표, 이동 횟수, 벽 부신 유무
  queue.enqueue([0, 0, 1, false])
  while (queue.length) {
    const [x, y, time, wall] = queue.dequeue()

    if (x === n - 1 && y === m - 1) {
      answer = time
      break
    }

    for (let i = 0; i < 4; i++) {
      let mx = x + dx[i]
      let my = y + dy[i]
      if (isRange(mx, my)) {
        // 벽 부순적이 있는 경우
        if (wall) {
          // visited[mx][my] < 1 벽 부수지 않고 방문했던 곳은 부수고 방문할 필요가 없다.
          if (graph[mx][my] === 0 && visited[mx][my] < 1) {
            visited[mx][my] = 1 // 어떠한 벽이라도 부수고 방문한 경우 1
            queue.enqueue([mx, my, time + 1, wall])
          }
        }
        // 벽 부순적이 없는 경우
        else {
          if (graph[mx][my] === 0 && visited[mx][my] < 2) {
            visited[mx][my] = 2 // 어떠한 벽이라도 부수지 않고 방문한 경우 2
            queue.enqueue([mx, my, time + 1, wall])
          }
          // 벽을 만난 경우
          else if (graph[mx][my] === 1 && visited[mx][my] < 2) {
            visited[mx][my] = 1
            queue.enqueue([mx, my, time + 1, !wall])
          }
        }
      }
    }
  }

  return answer
}

// 1. 벽을 부순적이 있는 경우
//  1-1. 방문한적이 없는 0의 경우만 방문 처리
// 2. 벽을 부수적이 없는 경우
//  2-1. 0인 경우 그냥 이동 -> 2로 방문 처리
//  2-2. 1인 경우 벽을 부수기 -> 1로 방문 처리

console.log(solution())
