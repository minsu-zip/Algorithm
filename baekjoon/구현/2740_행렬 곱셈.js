const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')

function solution() {
  // A의 행렬
  const [n, m1] = input.shift().split(' ').map(Number)
  const A = []
  for (let i = 0; i < n; i++) {
    A.push(input.shift().split(' ').map(Number))
  }

  // B의 행렬
  const [m2, k] = input.shift().split(' ').map(Number)
  const B = []
  for (let i = 0; i < m2; i++) {
    B.push(input.shift().split(' ').map(Number))
  }

  // A B의 행령
  const AB = Array.from(Array(n), () => Array(k).fill(0))
  // A의 행
  for (let i = 0; i < n; i++) {
    // B의 열
    for (let j = 0; j < k; j++) {
      let sum = 0
      // A의 열, B의 행
      for (let k = 0; k < m1; k++) {
        // AB의 i행 j열의 값 = A의 i행의 값 × B의 j열의 값
        sum += A[i][k] * B[k][j]
      }
      AB[i][j] = sum
    }
  }

  // 출력
  for (let i = 0; i < n; i++) {
    console.log(AB[i].join(' '))
  }
}

solution()
