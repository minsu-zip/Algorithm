// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

function solution(S, T) {
  let answer = 0

  let map1 = new Map()
  let map2 = new Map()

  // 초기 슬라이딩 윈도우 크기 세팅
  // 비교 대상 고정된 T의 문자열 길이 만큼 Map set
  for (let i = 0; i < T.length; i++) {
    if (map1.has(S[i])) {
      map1.set(S[i], map1.get(S[i]) + 1)
    } else {
      map1.set(S[i], 1)
    }
    if (map2.has(T[i])) {
      map2.set(T[i], map2.get(T[i]) + 1)
    } else {
      map2.set(T[i], 1)
    }
  }

  // 초기 윈도우 이후 오른쪽으로 이동하면서 아나그램 비교
  // 초기 비교에 비교를 수행하고
  // 문자를 삭제, 추가하므로 마지막 비교를 위해 S길이 + 1
  let lt = 0
  for (let rt = T.length; rt < S.length + 1; rt++) {
    let compare = true

    // 아나그램 비교
    for (let [key, val] of map2) {
      if (!map1.has(key) || val !== map1.get(key)) {
        compare = false
        break
      }
    }

    if (compare) answer += 1

    // 제일 왼쪽 문자 한 개 삭제
    map1.set(S[lt], map1.get(S[lt]) - 1)
    lt += 1

    // 제일 오른쪽 문자 추가
    if (map1.has(S[rt])) {
      map1.set(S[rt], map1.get(S[rt]) + 1)
    } else {
      map1.set(S[rt], 1)
    }
  }
  return answer
}

let S = 'bacaAacba'
let T = 'abc'
console.log(solution(S, T)) // 3
