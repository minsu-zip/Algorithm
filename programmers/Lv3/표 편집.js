class Node {
  constructor(data, prev) {
    this.data = data
    this.prev = prev
    this.next = null
  }
}
function solution(n, k, cmd) {
  const answer = Array.from(Array(n).fill('O'))
  let prevNode = new Node(0, null)
  let selected = {}
  const history = []

  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode)
    prevNode.next = newNode
    prevNode = newNode

    if (i === k) selected = newNode
  }

  cmd.map((command) => {
    let [c, cnt] = command.split(' ')
    let i = 0
    switch (c) {
      case 'U':
        // 선택된 노드의 앞을 탐색하며 위로 이동
        while (i < cnt && selected.prev) {
          selected = selected.prev
          i += 1
        }
        break
      case 'D':
        // 선택된 노드의 뒤를 탐색하며 뒤로 이동
        while (i < cnt && selected.next) {
          selected = selected.next
          i += 1
        }
        break
      case 'C':
        history.push(selected)
        // 선택된 노드에 앞뒤로 연결된 노드가 있는 경우
        // 선택된 노드의 앞의 노드는 선택된 노드의 뒤를 가리켜야하고
        // 선택된 노드의 뒤의 노드는 선택된 노드의 앞을 가리켜야함
        if (selected.prev && selected.next) {
          selected.next.prev = selected.prev
          selected.prev.next = selected.next
          selected = selected.next
        }
        // 선택된 노드가 제일 앞 노드인 경우
        else if (selected.next) {
          selected.next.prev = null
          selected = selected.next
        }
        // 선택된 노드가 제일 뒤 노드인 경우
        else if (selected.prev) {
          selected.prev.next = null
          selected = selected.prev
        }
        break
      case 'Z':
        const node = history.pop()
        // 복구된 노드가 기억하고 있는 정보를 기준으로 다시 연결 시켜준다.
        if (node.prev) node.prev.next = node
        if (node.next) node.next.prev = node
        break
      default:
        break
    }
  })

  // 복구되지 않은 리스트 탐색
  history.map((node) => {
    answer[node.data] = 'X'
  })

  return answer.join('')
}

console.log(
  solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'])
)
console.log(
  solution(8, 2, [
    'D 2',
    'C',
    'U 3',
    'C',
    'D 4',
    'C',
    'U 2',
    'Z',
    'Z',
    'U 1',
    'C',
  ])
)
