function solution(s, n) {
  //각 문자열 자르기
  var answer = s.split("");
  let result = [];
  answer.forEach((el, idx) => {
    //띄어쓰기는 미는거 제외
    if (s.charCodeAt(idx) === 32) {
      result.push(String.fromCharCode(32));
      return;
    }
    //아스키코드 변환
    let r = s.charCodeAt(idx);

    //Z 다음 A가 나와야하므로
    if (r >= 65 && r <= 90) {
      //Z범위 넘어갈 경우 26만큼 빼고 아니면 n만큼 민다.
      r = r + n > 90 ? r + n - 26 : (r += n);
    }

    //z 다음 a가 나와야하므로
    if (r >= 97 && r <= 122) {
      r = r + n > 122 ? r + n - 26 : (r += n);
    }
    result.push(String.fromCharCode(r));
  });
  //배열 합치기
  answer = result.join("");
  return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("Z", 10));
console.log(solution("a B z", 4));
console.log(solution(" aBZ", 20));
console.log(solution("y X Z", 4));
console.log(solution(" . h z", 20));
