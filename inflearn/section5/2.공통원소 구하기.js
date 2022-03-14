//공통원소 구하기
//A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.
// O(n log(n))

function solution(arr1, arr2) {
  const result = []
  let arrList = [...arr1, ...arr2]
  arrList = arrList.sort((a, b) => a - b)

  for (let i = 1; i < arrList.length; i++) {
    arrList[i - 1] === arrList[i] ? result.push(arrList[i]) : ''
  }

  return result
}

let a = [1, 3, 9, 5, 2]
let b = [3, 2, 5, 7, 8]
console.log(solution(a, b))
