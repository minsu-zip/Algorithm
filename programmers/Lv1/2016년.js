function solution(a, b) {
  var answer = "";
  let season = {
    3: "SUN",
    4: "MON",
    5: "TUE",
    6: "WED",
    7: "THU",
    1: "FRI",
    2: "SAT",
  };

  for (let x in season) {
    console.log(season[x]);
  }

  return answer;
}
console.log(solution(5, 24));
