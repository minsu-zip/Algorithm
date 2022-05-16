// function solution(n) {
//   var answer = 0;
//   let check = true;

//   //2~n까지 반복
//   for (let j = 2; j <= n; j++) {
//     //j 제곱근을 이용하여 소수판별
//     for (let i = 2; i <= Math.sqrt(j); i++) {
//       //소수가 아닌경우
//       if (j % i === 0) {
//         check = false;
//         break;
//       }
//       check = true;
//     }
//     //소수일때만 카운트
//     if (check) {
//       answer += 1;
//     }
//   }
//   return answer;
// }

function solution(n) {
  var answer = 0;
  let num = new Array(n + 1);

  for (let i = 2; i <= n; i++) {
    num[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (num[j] === 0) continue;

    for (let k = j * 2; k <= n; k += j) {
      num[k] = 0;
    }
  }

  console.log(num);
  for (let i = 2; i <= n; i++) {
    if (num[i] !== 0) answer += 1;
  }

  return answer;
}

console.log(solution(10));
console.log(solution(5));
