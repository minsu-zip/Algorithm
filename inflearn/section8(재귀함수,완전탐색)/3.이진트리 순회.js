// 이진트리 순회(깊이 우선 탐색)

function preOrderFn(v, n, preOrder) {
  if (v > n) return

  preOrder.push(v)
  preOrderFn(v * 2, n, preOrder)
  preOrderFn(v * 2 + 1, n, preOrder)
}

function inOrderFn(v, n, inOrder) {
  if (v > n) return

  inOrderFn(v * 2, n, inOrder)
  inOrder.push(v)
  inOrderFn(v * 2 + 1, n, inOrder)
}

function postOrderFn(v, n, postOrder) {
  if (v > n) return

  postOrderFn(v * 2, n, postOrder)
  postOrderFn(v * 2 + 1, n, postOrder)
  postOrder.push(v)
}

function solution(n) {
  let preOrder = [],
    inOrder = [],
    postOrder = []

  preOrderFn(1, n, preOrder)
  inOrderFn(1, n, inOrder)
  postOrderFn(1, n, postOrder)

  console.log(...preOrder)
  console.log(...inOrder)
  console.log(...postOrder)
}

console.log(solution(7))
