function solution() {
  let selfNumber = new Array(10001).fill(0)
  let i = 1

  while (i < 10001) {
    let tmp = String(i).split('')
    selfNumber[i] = i + tmp.reduce((acc, cur) => Number(acc) + Number(cur), 0)
    i++
  }

  i = 1
  while (i < 10001) {
    if (!selfNumber.includes(i)) console.log(i)
    i++
  }
}

solution()
