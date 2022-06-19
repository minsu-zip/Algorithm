from collections import deque
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
array = [list(map(int, input().split())) for _ in range(m)]


def bfs(idx, graph):
    cnt = 0
    queue = deque()
    queue.append(idx)
    visited = [False] * (n+1)
    visited[idx] = True

    while queue:
        tmp = queue.popleft()
        for i in graph[tmp]:
            if visited[i] == False:
                visited[i] = True
                queue.append(i)
                cnt += 1

    return cnt


def solution():
    computer = []
    compare = 0
    graph = [[] for _ in range(n+1)]

    for [x, y] in array:
        graph[y].append(x)

    for idx in range(1, n+1):
        cnt = bfs(idx, graph)
        computer.append([idx, cnt])
        compare = max(compare, cnt)

    answer = []
    for [com, cnt] in computer:
        if cnt == compare:
            answer.append(com)
    answer.sort()

    print(*answer)


solution()
