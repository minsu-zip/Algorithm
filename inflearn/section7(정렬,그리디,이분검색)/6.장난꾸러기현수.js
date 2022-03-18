function solution(arr) {
  let answer = []
  let sortArr = [...arr].sort((a, b) => a - b)

  arr.forEach((el, idx) => {
    if (el !== sortArr[idx]) answer.push(idx + 1)
  })

  return answer
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160] // 3 8
let arr1 = [120, 130, 150, 150, 130, 150] // 3 5
console.log(solution(arr1))
