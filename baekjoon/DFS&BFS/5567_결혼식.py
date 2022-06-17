from collections import deque
import sys
input = sys.stdin.readline
n = int(input())
m = int(input())
array = [list(map(int, input().split())) for _ in range(m)]


def bfs(graph):
    cnt = 0  # 결혼식 참석자 수
    queue = deque([])
    visited = [False] * (n+1)
    visited[1] = True
    # 상근이 친구
    for i in graph[1]:
        queue.append(i)
        visited[i] = True
        cnt += 1

    while queue:
        tmp = queue.popleft()
        # 상근이 친구의 친구
        for i in graph[tmp]:
            if visited[i] == False:
                visited[i] = True
                cnt += 1

    return cnt


def solution():
    graph = [[] for _ in range(n+1)]
    for [x, y] in array:
        graph[x].append(y)
        graph[y].append(x)

    return bfs(graph)


print(solution())
