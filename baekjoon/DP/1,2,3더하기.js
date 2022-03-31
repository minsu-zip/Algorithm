const fs = require('fs')
const [n, ...arr] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')

function solution(n, arr) {
  let dp = [0, 1, 2, 4, 7]

  arr.forEach((el) => {
    let copyDp = [...dp]
    for (let i = 5; i <= Number(el); i++) {
      copyDp.push(copyDp[i - 3] + copyDp[i - 2] + copyDp[i - 1])
    }
    console.log(copyDp[Number(el)])
  })
}

solution(n, arr)
