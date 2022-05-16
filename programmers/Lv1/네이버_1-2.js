function solution(a, b) {
  let answer = [];
  let alist = a.filter((el, idx) => a.indexOf(el) === idx);
  let blist = b.filter((el, idx) => b.indexOf(el) === idx);

  answer.push(alist.length);
  answer.push(blist.length);
  answer.push(sum(alist, blist));
  answer.push(complement(alist, blist));
  answer.push(intersect(alist, blist));
  console.log("A");
  console.log(answer);
}

function sum(base, other) {
  let sumlist = [...base, ...other];
  sumlist = sumlist.filter((el, idx) => sumlist.indexOf(el) === idx);
  return sumlist.length;
}

function complement(base, other) {
  let comlist = base.filter((el, idx) => other.indexOf(el) === -1);
  return comlist.length;
}

function intersect(base, other) {
  let intlist = base.filter((el, idx) => other.indexOf(el) !== -1);
  return intlist.length;
}

let a = [1, 2, 3, 2];
let b = [1, 3];

console.log(solution(a, b));
