const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, k] = input.shift().split(' ').map(Number)
const arr = input.map((x) => x.split(' ').map(Number))

function solution() {
  // 각 물건을 선택할 때 마다 최대 가치를 판별 변수
  let dp = Array.from(Array(n + 1), () => Array(k + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    let [w, v] = [...arr[i - 1]]

    // j는 배낭의 허용 무게
    for (let j = 1; j <= k; j++) {
      // 배낭의 허용 무게보다 주어진 물건이 더 무거울 때 주어진 물건 제외
      // 즉 이전의 배낭을 가져온다.
      if (w > j) {
        dp[i][j] = dp[i - 1][j]
      }
      // 배낭의 허용 무게에 주어진 물건이 들어갈 수 있는 경우에는 두 가지 선택지가 생긴다. 이 중 큰 값을 저장한다.
      // 현재 물건을 넣지 않는 경우 =>  이전 배낭을 가지고 온다.
      // 현재 물건을 넣는 경우 => 이전 배낭에서 주어진 물건만큼 무게를 빼고, 현재 물건을 넣는다.
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v)
      }
    }
  }

  return dp[n][k]
}

console.log(solution())
