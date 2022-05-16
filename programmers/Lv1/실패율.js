function solution(N, stages) {
  var answer = [];
  //스테이지 오름차순 정렬
  stages.sort((a, b) => a - b);

  //스테이지 수(분자)
  let stageNum = new Array(N).fill(0);
  //(분모)
  let mod = new Array(N).fill(0);
  //실패율[스테이지번호][실패율]
  let fail = Array.from(Array(N), () => new Array(2).fill(0));

  //실패율 [스테이지 번호 초기화]
  for (let i = 0; i < N; i++) {
    fail[i][0] = i + 1;
  }

  //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
  for (let x of stages) {
    //최종 스테이지는 제외
    if (x > N) break;
    stageNum[x - 1] += 1;
  }

  let m = 0;
  //스테이지에 도달한 플레이어 수
  for (let i = 0; i < N; i++) {
    //stages길이 - 누적 stage길이 = 분모값
    mod[i] = stages.length - m;
    m += stageNum[i];
  }

  //실패율 계산
  for (let j = 0; j < N; j++) {
    fail[j][1] = stageNum[j] / mod[j];
  }

  //실패율에 따른 내림차순
  fail.sort((a, b) => {
    //실패율 동일시 작은 번호의 스테이지 기준 정렬
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  //스테이지 번호만 추출
  for (let x of fail) {
    answer.push(x[0]);
  }

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
