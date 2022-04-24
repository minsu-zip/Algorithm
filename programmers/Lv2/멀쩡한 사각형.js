function solution(w, h) {
  let answer = 0
  let gcd = 0 // w,h의 최대 공약수의 증가만큼 패턴이 생긴다.

  let x = w > h ? w : h
  let y = w > h ? h : w

  // 최대 공약수
  while (true) {
    if (x % y === 0) {
      gcd = y
      break
    }
    ;[x, y] = [y, x % y]
  }

  answer = w * h - (w + h - gcd)

  return answer
}

console.log(solution(8, 12)) // 80
