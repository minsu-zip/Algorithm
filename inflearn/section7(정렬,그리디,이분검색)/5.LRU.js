// LRU 삽입 정렬 응용 (카카오 캐시 문제 변형)
// O(n^2)
function solution(S, arr) {
  let answer = [...arr]
  let cache = new Array(S).fill(0)

  answer.forEach((el) => {
    // Cache Miss
    if (!cache.includes(el)) {
      // 한 칸씩 뒤로 미룬 후 처음에 작업 삽입
      for (let i = cache.length - 2; i >= 0; i--) {
        cache[i + 1] = cache[i]
      }
      cache[0] = el
    }
    // Chache Hit
    else {
      let idx = cache.indexOf(el)
      for (let j = idx - 1; j >= 0; j--) {
        cache[j + 1] = cache[j]
      }
      cache[0] = el
    }
  })

  return cache
}

let S = 5
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7]
console.log(solution(S, arr))
