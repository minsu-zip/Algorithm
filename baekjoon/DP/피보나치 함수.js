const fs = require('fs')
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(n, arr) {
  // 숫자 0,1,2일 때 0과 1의 호출 갯수
  let dp = [
    [1, 0],
    [0, 1],
    [1, 1],
  ]
  arr.forEach((el) => {
    const copyDp = dp.map((x) => [...x])
    for (let i = 3; i <= Number(el); i++) {
      copyDp.push([
        copyDp[i - 1][0] + copyDp[i - 2][0],
        copyDp[i - 1][1] + copyDp[i - 2][1],
      ])
    }
    console.log(...copyDp[Number(el)])
  })
}

solution(n, arr)
