function solution(files) {
  const fileList = []
  // 정규표현식 그룹으로 조건별 나누기
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/

  files.forEach((file, i) => {
    let [fn, head, num, _] = file.match(re)
    fileList.push({ fn, head: head.toUpperCase(), num: parseInt(num), i })
  })

  // 조건별 정렬
  fileList.sort((a, b) => {
    if (a.head === b.head) {
      return a.num - b.num
    } else {
      if (a.head > b.head) return 1
      else return -1
    }
  })

  return fileList.map((x) => x.fn)
}
