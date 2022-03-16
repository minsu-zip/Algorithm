// 괄호문자제거 (스택)
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
// O(n)

function solution(s) {
  let answer = ''
  let stack = []
  let str = []

  for (let x of s) {
    stack.push(x)
  }

  for (let i = 0; i < s.length; i++) {
    let tmp = stack.pop()

    // 여는 괄호 나올 시
    if (tmp === '(') {
      // 저장된 str 배열에서 닫는 괄호를 만날 때 까지 요소 제거
      // 닫는 괄호 개수 만큼 반복문을 수행하기 때문에 시간 복잡도에 영향은 크게 미치지 않는다.
      while (str.pop() !== ')') {}
    } else {
      str.push(tmp)
    }
  }

  // 문제 풀이에서 끝에서 부터 반대로 제거 했기 때문에 문자열이 반대로 들어가 있다.
  // 따라서 배열 reverse 후 문자열로 합치기
  answer = str.reverse().join('')

  return answer
}

let s = '(A(BC)D)EF(G(H)(IJ)K)LM(N)' // EFLM
console.log(solution(s))
