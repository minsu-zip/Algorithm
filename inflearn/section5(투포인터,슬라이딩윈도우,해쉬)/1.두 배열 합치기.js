// 두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 작성
// 시간복잡도 O(n)
function solution(arr1, arr2) {
  let [x, y] = [0, 0]
  const result = []
  let cnt = arr1.length + arr2.length

  while (cnt > 0) {
    result.push(arr1[x] < arr2[y] ? arr1[x++] : arr2[y++])
    cnt--
  }
  return result
}

let a = [1, 3, 5]
let b = [2, 3, 6, 7, 9]
console.log(solution(a, b))
