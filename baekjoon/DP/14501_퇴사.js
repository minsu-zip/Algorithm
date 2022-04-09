const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const n_arr = input.slice(1, n + 1)
const T = []
const P = []

const m_arr = n_arr.forEach((x) => {
  const [t, p] = x.split(' ').map(Number)
  T.push(t)
  P.push(p)
})

const money = []

function recursion(t, p, i, arr) {
  // n일이 지났을 때
  if (i === n) {
    // n일이 끝난 시점에서 상담이 있지 않은 상태,
    // 즉 상담이 끝난 경우라면 누적된 작업은 모두 조건에 따라 수행할 수 있다
    if (t <= 0) {
      money.push(p)
    }
    return
  }

  // 상담이 모두 종료된 경우만 현재 i번째의 상담을 진행한다.
  if (t <= 0) {
    // 해당 일에도 상담이 진행되므로 T[i]-1
    recursion(T[i] - 1, p + P[i], i + 1, [...arr, P[i]]) // i일의 상담을 진행하는 경우
  }
  // 상담 일수만 -1
  recursion(t - 1, p, i + 1, [...arr]) // i일의 상담을 진행하지 않는 경우
}

function solution() {
  let answer = 0
  // 초기 Ti 기간, Pi 금액, i일자
  recursion(0, 0, 0, [])
  answer = Math.max(...money)

  return answer
}

console.log(solution())
