//동전교환(DFS-Cut Edge Tech)

let coin = 0
function DFS(coinSort, M, i) {
  // 거슬러 줄 돈이 없거나 coinList를 전체 탐색 했을 경우
  if (M === 0 || i >= coinSort.length) return

  // 동전보다 거슬러 줄 돈이 클 경우
  if (M >= coinSort[i]) {
    coin += parseInt(M / coinSort[i])
    M = M % coinSort[i]
  }

  DFS(coinSort, M, i + 1)
}

function solution(coinList, M) {
  let answer = 0
  // 큰 동전 순으로 나누어 줘야지 최소 개수 구할 수 있다.
  let coinSort = [...coinList].sort((a, b) => b - a)
  DFS(coinSort, M, 0)
  answer = coin
  return answer
}

let coinList = [1, 2, 5]
console.log(solution(coinList, 15))
