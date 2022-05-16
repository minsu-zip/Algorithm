function solution(board, moves) {
  var answer = 0;
  //board 이차원 배열 깊은 복사
  let list = board.map((v) => v.slice());
  //바구니
  let stack = [];
  //크레인 위치정보만큼 반복
  for (let i = 0; i < moves.length; i++) {
    //배열의 인덱스 0부터 고려
    let n = moves[i] - 1;
    //크레인 위치 n을 기준으로 세로길이만큼만 탐색
    for (let j = 0; j < list.length; j++) {
      //배열에 인형이 있을시
      if (list[j][n] !== 0) {
        //바구니 마지막값이 현재 인형과 같다면
        if (stack[stack.length - 1] === list[j][n]) {
          answer += 2;
          stack.pop();
        }
        //다르면 인형 삽입
        else {
          stack.push(list[j][n]);
        }
        //뽑은 인형 처리후, 해당 배열 탐색 종료
        list[j][n] = 0;
        break;
      }
    }
  }
  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
