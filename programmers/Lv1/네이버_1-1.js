function solution(name_list) {
  let answer = false;

  for (let i = 0; i < name_list.length; i++) {
    for (let j = 0; j < name_list.length; j++) {
      if (i === j) continue;
      if (name_list[i].indexOf(name_list[j]) !== -1) answer = true;
    }
  }
  return answer;
}
let name_list = ["가을", "우주", "너굴"];
let name_list2 = ["봄", "여울", "봄봄"];
let name_list3 = ["너굴", "너울", "여울", "서울"];
let name_list4 = ["봄봄봄", "봄", "봄", "봄봄"];
console.log(solution(name_list));
console.log(solution(name_list2));
console.log(solution(name_list3));
console.log(solution(name_list4));
