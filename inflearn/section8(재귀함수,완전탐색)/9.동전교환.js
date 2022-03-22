//동전교환(DFS-Cut Edge Tech)

let coin = 0
function DFS(coinSort, M, i) {
  if (M === 0 || i >= coinSort.length) return

  if (M >= coinSort[i]) {
    coin += parseInt(M / coinSort[i])
    M = M % coinSort[i]
  }

  DFS(coinSort, M, i + 1)
}

function solution(coinList, M) {
  let answer = 0
  let coinSort = [...coinList].sort((a, b) => b - a)
  DFS(coinSort, M, 0)
  answer = coin
  return answer
}

let coinList = [1, 2, 5]
console.log(solution(coinList, 15))
