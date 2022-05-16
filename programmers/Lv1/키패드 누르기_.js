function solution(numbers, hand) {
  var answer = "";
  //객체 배열 이용
  //키패드 위치에 따라 좌표 정보를 세팅
  let list = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  //초기 손가락 위치
  let left = list["*"];
  let right = list["#"];

  //입력 numbers만큼 반복
  for (let x of numbers) {
    let [i, j] = list[x]; //입력 숫자위치 i,j에 저장
    //j값이 0이라면 왼쪽 손가락으로만 사용
    if (j === 0) {
      answer += "L";
      left = list[x];
    }
    //j값이 2이라면 오른쪽 손가락으로만 사용
    else if (j === 2) {
      answer += "R";
      right = list[x];
    }
    //가운데일 경우
    else {
      //왼쪽 손가락 위치와 현재 i,j의 떨어진 거리 계산(절대값 이용)
      let tmpL = Math.abs(i - left[0]) + Math.abs(j - left[1]);
      //오른쪽 손가락 위치와 현자 i,j의 떨어진 거리 계산(절대값 이용)
      let tmpR = Math.abs(i - right[0]) + Math.abs(j - right[1]);

      //떨어진 거리가 더 가까운 경우를 판별해서
      //해당 손가락으로 사용
      if (tmpL > tmpR) {
        right = list[x];
        answer += "R";
      } else if (tmpL < tmpR) {
        left = list[x];
        answer += "L";
        //떨어진 거리가 왼쪽 오른쪽 같은 경우
      } else if (tmpL === tmpR) {
        //왼손잡이라면 왼쪽 이용
        if (hand === "left") {
          left = list[x];
          answer += "L";
          //오른손잡이일 경우
        } else {
          right = list[x];
          answer += "R";
        }
      }
    }
  }
  return answer;
}
let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
console.log(solution(numbers, hand));
