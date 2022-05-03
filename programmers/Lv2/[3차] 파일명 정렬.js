function solution(files) {
  const fileList = []

  for (const file of files) {
    let str = file
    // 숫자가 존재하는 인덱스의 위치를 찾아서
    // head 문자열 저장
    const searchNumber = str.search(/[0-9]/)
    const head = file.substr(0, searchNumber)
    str = file.substr(searchNumber)

    // number, tail을 문자 나누기 위해 정규표현식
    const searchStr = str.search(/\D/)
    let number = ''
    let tail = ''
    // 문자가 없는 경우 tail 존재X
    if (searchStr !== -1) {
      number = str.substr(0, searchStr)
      tail = str.substr(searchStr)
    } else {
      number = str
    }

    // 원본, head, number, tail 저장
    fileList.push([file, head.toUpperCase(), parseInt(number), tail.trim()])
  }

  // 조건에 따른 정렬
  fileList.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[2] - b[2]
    } else {
      if (a[1] > b[1]) return 1
      else return -1
    }
  })

  return fileList.map((x) => x[0])
}

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ])
) // 출력: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ])
) // 출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
